/**
 * @param {string} classString
 */
function removeExcessiveDetails(classString)
{
    return classString.replace('override', '');
}

/**
 * @param {string} classDeclarationLine
 */
function parseClassName(classDeclarationLine)
{
    const classKey = 'class'
    const hasSubClassing = classDeclarationLine.indexOf(':')  !== -1
    const startPos = classDeclarationLine.indexOf(classKey) + classKey.length
    const length = (hasSubClassing
        ? classDeclarationLine.indexOf(':')
        : classDeclarationLine.length) - classKey.length
    return classDeclarationLine.substr(startPos, length).trim()
}

/**
 * @param {string} line
 */
function isMethodDeclaration(line)
{
    return (line.indexOf(':') === -1) && (line.indexOf('(') !== -1)
}

/**
 * @param {string} classString
 */
function createCppFileOfClass(classString) {
    let outputFile = ``
	
    const lines = removeExcessiveDetails(classString).split('\n')
	
    const className = parseClassName(lines[0])
    const classSpacePrefix = className + '::'
	
    lines.forEach(line => {
        if (!isMethodDeclaration(line))
        {
            return
        }
		
        let resultLine = line.replace('\t', '')
		
        const firstBracketPos = line.indexOf('(')
        const methodNamePos = line.indexOf(' ')
		const constructorDeclaration = (methodNamePos > firstBracketPos) || methodNamePos === -1
        if (constructorDeclaration)
        {
            resultLine = classSpacePrefix + resultLine;
        }
        else
        {
			const returnType = resultLine.slice(0, methodNamePos)
			const methodNameAndParams = resultLine.slice(methodNamePos)
            resultLine = returnType + classSpacePrefix + methodNameAndParams
        }

        outputFile += resultLine.replace(';', '\n{\n\n}\n\n');
    })

    console.log(outputFile)
}
