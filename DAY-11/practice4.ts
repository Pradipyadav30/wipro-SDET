type FolderNode = {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
};

const folderStructure: FolderNode = {
    name: "Root",
    files: ["file1.txt", "file2.txt"],
    subFolders: [
        {
            name: "Documents",
            files: ["doc1.pdf"]
        },
        {
            name: "Images",
            subFolders: [
                {
                    name: "Vacation",
                    files: ["photo1.jpg", "photo2.jpg"]
                }
            ]
        }
    ]
};

console.log(folderStructure);