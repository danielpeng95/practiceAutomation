var fs = require("fs")

module.exports = {
    "Test the file": browser => {
        let fileInfo = require("../testAssets/readWriteFile")
        fileInfo.foo = "something else"
        console.log(`The file's value for "foo" is: ${fileInfo.foo}`)

        var fileInfo2 = fs.readFileSync("./testAssets/readWriteFile.json")
        let fooObject = JSON.parse(fileInfo2)
        console.log(fooObject)

        let newFileInfo = { foo: "the hous and mins worked" }

        let newFileData = JSON.stringify(newFileInfo)

        fs.writeFileSync('./testAssets/readWriteFile.json', newFileData)
        // fs.writeFileSync(`./testAssets/readWriteFile${new Date().getTime()}.json`, newFileData) //so it doesn't overwrite

    }
}