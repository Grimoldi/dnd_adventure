/**
 * Populate the desidered frontmetter property
 * from a list of options retrieved by the notes inside the given folder.
 * The value will be a link to the selected note.
 *
 * @param tp - templater tp object
 * @param folder - The folder in which looking for the notes (trailing "/" could be omitteted)
 * @param property - The property to populate with the link
 *
 * @example
 * Populate the campaign tag given a selection of notes under "Campaign" folder
 * ```
 * tp.user.fm_property_link_from_notes_list(tp, "Campaign", "campaign")
 * ```

 * @example
 * The folder could Populate the campaign tag given a selection of notes under "Campaign" folder
 * ```
 * tp.user.fm_property_link_from_notes_list(tp, "Campaign", "campaign")
 * ```
 */
async function fm_property_link_from_notes_list (tp, folder, property) {
    // collect all notes in the folder
    if (!(folder.endsWith("/"))){
        folder = `${folder}/`;
    }
    const allFiles = tp.app.vault.getMarkdownFiles();
    const folderFiles = allFiles.filter(f =>  
        f.path.startsWith(folder)  
    );

    // add placeholder option  
    const placeholderLabel = "🌀 No value";  
    const placeholderValue = null;

    // offer the choices and get back the chosen one
    const givenChoices = [placeholderLabel, ...folderFiles.map(f => f.basename)];  
    const givenValues = [placeholderValue, ...folderFiles.map(f => f.path)];
    const question = `Select value for ${property}.`;
    const chosenValue = await tp.system.suggester(givenChoices, givenChoices, true, question);

    // build the link
    let fmLink = null;
    if (chosenValue !== placeholderLabel){
        fmLink = `[[${chosenValue}]]`;
    }
    else {
        fmLink = placeholderValue;
    }

    // add the note link in the property
    // set a timeout to wait for file creation,
    // otherwise the setting of the propriety would fail.
    
    tp.hooks.on_all_templates_executed(async  () => {
        const file = tp.file.find_tfile(tp.file.path(true));
        await app.fileManager.processFrontMatter(file, frontmatter => {
            frontmatter[property] = fmLink;
          });
    });
}

module.exports = fm_property_link_from_notes_list;