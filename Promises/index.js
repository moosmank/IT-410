function resolvedPath(directoryPath, fileName)
{
	var mergedPath = path.resolve(directoryPath, fileName);
	return mergedPath;
}

function readFile(filePath)
{
	return new Promise(function(resolve, reject)
	{
		readThisFile(function()
		{
			resolve(fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) reject;
			}));
		});
	}
}

function readDir (directoryPath)
{
	return new Promise(function(resolve, reject)
	{
		readThisDir(function()
		{
			resolve(fs.readDir(directoryPath, 'utf8', (err, files) => {
				if (err) reject;
			}));
		});
	}
}

function readDirFiles (directoryPath)
{
	return new Promise(function(resolve, reject)
	{
		readTheseDirFiles(function()
		{
			resolve(
				var dir = readDir(directoryPath);
				for files in dir
				{
					readFile(resolvedPath(directoryPath, file));
				}
			);
			//reject; //directory or file within it can't be read
		});
	}
}