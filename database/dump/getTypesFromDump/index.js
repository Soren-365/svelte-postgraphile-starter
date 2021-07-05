/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable @typescript-eslint/no-unused-vars */
var fs = require('fs');
const { table } = require('console');
const { slice } = require('lodash');

// // console.log("START PROGRAM")

const dexieDBName = 'clientDB'

// TEST LOAD:
// const buffer = fs.readFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/migrations/test copy.sql', function (err, data) {
//   return data
// })

// LOAD entire postgres DB :
const buffer = fs.readFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/migrations/current.sql', function (err, data) {
  return data
})

// LOAD only Enums :
// const buffer = fs.readFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/dumpEnum.sql', function (err, data) {
//     return data
// })


// // console.log(typeof buffer)

const stringOfDump = buffer.toString()
const lengthOfStringOfDump = stringOfDump.length
const tableObjectArray = []
let tableObject = {}
let tableName = "start"
let tableNamePre = "start"
let restOfDump = stringOfDump
let enumsArray = []
const wrapWordCutoffEnum = "ENUM"
restOfDump = restOfDump.replace("\t", "        ");
let placementOfNextEnum = 1
let cutOffForEnums = restOfDump
let cutOffForEnumName = ''
let enumTypes = []

// first ENUMS extraction and saves, then TABLES in seperate while() loop
while (placementOfNextEnum !== -1) {

  indexOfnextParanthesisSemicolon = cutOffForEnums.lastIndexOf(");")
  placementOfNextCreateType = cutOffForEnums.indexOf('CREATE TYPE');
  // console.log("placementOfNextEnum", placementOfNextEnum)
  // console.log("placementOfNextCreateType", placementOfNextCreateType)

  cutOffForEnums = cutOffForEnums.slice(placementOfNextCreateType + 11, cutOffForEnums.length).trim();



  //console.log("cutOffForEnums", cutOffForEnums)
  cutOffForEnumName = cutOffForEnums.slice(0, cutOffForEnums.indexOf(' '));
  //  console.log("cutOffForEnumName", cutOffForEnumName)
  const enumNamePre = cutOffForEnumName
  const enumName = enumNamePre.slice(enumNamePre.indexOf('.') + 1, enumNamePre.length)
  // console.log("EnumName:", '|' + enumName + '|')
  cutOffForEnumName = cutOffForEnumName.slice(cutOffForEnumName.indexOf('(') + 1, cutOffForEnumName.length);
  cutOffForEntries = cutOffForEnums
  cutOffForEntries = cutOffForEntries.slice(0, cutOffForEnums.indexOf(')'));
  // console.log("CUTOFFORENTRIES", cutOffForEntries)

  let cutOffLeft = cutOffForEntries.slice(cutOffForEntries.indexOf('\'') + 1, cutOffForEntries.length)
  let cutOff = cutOffLeft
  enumTypes = []
  while (cutOffLeft.indexOf(',') !== -1) {


    // console.log("CUTOFLeft", cutOffLeft)
    // cutOffLeft = cutOffLeft.slice(cutOff.indexOf('\''), cutOffLeft.length)
    cutOff = cutOffLeft.slice(0, cutOffLeft.indexOf('\''))
    // console.log("CUTOF", cutOff)
    let enumEntry = cutOff.slice(0, cutOffLeft.indexOf('\''))
    cutOffLeft = cutOffLeft.slice(cutOffLeft.indexOf('\''), cutOffLeft.length)
    // console.log("EnumEntry:", '|', enumEntry, '|')
    cutOffLeft = cutOffLeft.slice(cutOffLeft.indexOf(','), cutOffLeft.length)
    cutOffLeft = cutOffLeft.slice(cutOffLeft.indexOf('\'') + 1, cutOffLeft.length)

    // console.log("CUTOFLeft", cutOffLeft)
    // console.log("cutOffLeft.indexOf('\'') ", cutOffLeft.indexOf('\''))
    // console.log("-----end of loop -----")
    enumTypes.push(enumEntry)
    // console.log("Enums Array", enumTypes)
  }
  cutOff = cutOffLeft.slice(0, cutOffLeft.indexOf('\''))
  enumEntry = cutOff.slice(0, cutOffLeft.indexOf('\''))
  // console.log('|', enumEntry, '|')
  enumTypes.push(enumEntry)
  ////////////////////////////////////////////////

  // console.log("placementOfNextEnum", placementOfNextEnum)
  cutOffForEnums = cutOffForEnums.slice(placementOfNextEnum + 4, cutOffForEnums.length);
  // console.log("cutOffForEnums to update placementOfNextEnum:", cutOffForEnums.slice(0, 200))
  placementOfNextEnum = cutOffForEnums.indexOf(wrapWordCutoffEnum);
  // console.log("placementOfNextEnum", placementOfNextEnum)
  enumsArray.push({ enumName: enumName, enumTypes: enumTypes })
  // console.log("enums arrays length : -->", cutOffForEnums.length)


}
// console.log("enumsArray:", enumsArray)
////// tables extracted -->
while (tableName !== "") {
  const wrapWordCutoff = 'create table'

  // console.log(`-----  PREVIOUS Table: ${tableName} -------`)
  let placementOfNextTable = restOfDump.toLowerCase().indexOf(wrapWordCutoff)

  let cutOffpart = restOfDump.slice(placementOfNextTable, restOfDump.length)
  // console.log("cutOffpart", cutOffpart)

  restOfDump = restOfDump.slice(placementOfNextTable + 5, restOfDump.length)
  let placementOfNextnn = cutOffpart.indexOf(");")
  let placementOfNextTable2 = cutOffpart.indexOf("--//")

  let tableCutOut = cutOffpart.slice(wrapWordCutoff.length, placementOfNextnn + 2)
  // console.log("cutOffpart.slice(wrapWordCutoff.length, placementOfNextnn + 2)", cutOffpart.slice(wrapWordCutoff.length, placementOfNextnn + 2))

  let indexOfnextSpace = tableCutOut.trim().indexOf(" ")
  // console.log("tableCutOut.trim().indexOf(\" \")", tableCutOut.trim().indexOf(" "))
  tableNamePre = tableCutOut.slice(1, indexOfnextSpace + 2).trim()
  // console.log("tableNamePre", tableNamePre)
  tableName = tableNamePre.slice(tableNamePre.indexOf('.') + 1, tableNamePre.length)
  console.log(" ------------------ ")
  console.log("tableName", tableName)

  let restOfTable = tableCutOut.slice(indexOfnextSpace + 1, tableCutOut.length)
  let oldRestOfTable = restOfTable
  let rowArray = []
  let tableKey = []
  let rowArrayType = []
  let rowArrayQueryType = []
  let rowName = ''
  let rowNamePre = ''
  let rowArrayIndexed = []

  let rowtypeRaw = ''
  let restOfTableForType = ''
  let restOfTableForMultipleKeyDetect = ''
  let indexOfgetFirstApostrophe = 0
  let indexOfgetFirstApostrophe2 = 0
  let indexOfgetOldstartOfRowName = 0
  let indexOfgetFirstParanthesisApostrophe = 0
  let indexOfnextLetterFromRef = 0
  let indexOfnextLetterAfterNewLineOld = -1
  let indexOfnextComma = 0
  let indexOfnextLineComma = 0
  let indexOfnextParanthesisSemicolon = 10
  let indexOfgetFirstPureParanthesis = 0
  let indexOfgetLastPureParanthesis = 0
  let indexOfstartOfRowName = 0
  let indexOfendOfRowName = 0
  let indexOfnewLineApostrope = 0
  let indexOfnewLineEndApostrope = 0
  let indexOfgetNextApostropheFromRef = 0
  let indexOfNextRowSpace = 0
  let firstRow = true
  let multipleKeyDetect = false
  let multipleKeyDetectOld = false
  let sliceForMultipleDetect = ''
  let sliceForMultipleDetectCommaPlacement = 0
  let primaryKeyDetect = false
  let lastLineDetect = false


  while (indexOfnextParanthesisSemicolon >= 2) {
    indexOfgetOldstartOfRowName = indexOfstartOfRowName
    //  // console.log("-----  NEW Row -------")
    // // console.log("RESTOFTABLE: ", restOfTable)

    indexOfgetFirstParanthesisApostrophe = restOfTable.indexOf("(\"")

    indexOfnextParanthesisSemicolon = restOfTable.lastIndexOf(");")

    //  // console.log("indexOfnextParanthesisSemicolon", indexOfnextParanthesisSemicolon)
    //  // console.log("indexOfgetFirstParanthesisApostrophe", indexOfgetFirstParanthesisApostrophe)
    indexOfgetFirstPureParanthesis = restOfTable.indexOf("(")
    //  // console.log("indexOfgetFirstPureParanthesis", indexOfgetFirstPureParanthesis)
    indexOfgetLastPureParanthesis = restOfTable.indexOf(")")
    //  // console.log("indexOfgetLastPureParanthesis", indexOfgetLastPureParanthesis)
    indexOfNextRowSpace = restOfTable.indexOf(" ")
    indexOfgetSecondParanthesis = restOfTable.indexOf("\")")
    indexOfgetFirstApostrophe = restOfTable.indexOf("\"")
    //  // console.log("indexOf Paranthesis, Apostrophe", indexOfgetFirstParanthesisApostrophe, indexOfgetFirstApostrophe)

    indexOfgetNextApostrophe = restOfTable.slice(indexOfgetFirstApostrophe + 1, restOfTable.length).indexOf("\"")
    //  // console.log("indexOfgetNextApostrophe", indexOfgetNextApostrophe)
    //  // console.log("indexOf Second Paranthesis, Second Apostrophe", indexOfgetSecondParanthesis, indexOfgetNextApostrophe)

    indexOfnextComma = restOfTable.indexOf(",")
    //   // console.log("indexOfnextComma", indexOfnextComma)

    sliceForMultipleDetect = restOfTable.slice(indexOfnextComma - 4, indexOfnextComma + 4).replace(" ", "")
    sliceForMultipleDetectComma = sliceForMultipleDetect.indexOf(",")
    multipleKeyDetect = Boolean(sliceForMultipleDetect[sliceForMultipleDetectComma - 1] === "\"" && sliceForMultipleDetect[sliceForMultipleDetectComma + 1] === "\"")
    //   // console.log("multipleKeyDetect: ", multipleKeyDetect)
    //  // console.log("multipleKeyDetectOld: ", multipleKeyDetectOld)

    let refSlice = []
    //  // console.log("rowArray", rowArray)
    if (firstRow) {
      //   // console.log("restOfTable", restOfTable)
      //    // console.log("indexOfgetFirstPureParanthesis", indexOfgetFirstPureParanthesis)
      //  // console.log("indexOfnextComma", indexOfnextComma)
      refSlice = restOfTable.slice(indexOfgetFirstPureParanthesis !== -1 ? (indexOfgetFirstPureParanthesis + 1) : 0, ((indexOfnextComma !== -1) ? (indexOfnextComma + 1) : indexOfnextParanthesisSemicolon)).trim()
      //   // console.log("Row Array Empty! special case, removing \"(\"")

    } else {
      refSlice = restOfTable.slice(0, indexOfnextComma !== -1 ? (indexOfnextComma + 1) : indexOfnextParanthesisSemicolon).trim()

      //   // console.log("Row Array Not Empty, starting refSlice from 0 location of RestofTable")
    }

    // restOfTable.slice(((indexOfgetFirstPureParanthesis !== -1) ? (indexOfgetFirstPureParanthesis + 1) : 0), (indexOfgetLastPureParanthesis)).trim()
    //   // console.log("indexOfgetFirstPureParanthesis, refSlice", indexOfgetFirstPureParanthesis, refSlice)

    let i = 0;
    while (refSlice[i] === " ") {
      i++;
    }
    indexOfnextLetterFromRef = i
    indexOfgetNextApostropheFromRef = refSlice.indexOf("\"")


    // indexOfnewLineApostrope = restOfTable.slice(((indexOfgetFirstPureParanthesis !== -1) ? indexOfgetFirstPureParanthesis + 1 : indexOfnextComma + 1, indexOfgetLastPureParanthesis)).indexOf("\"")
    // indexOfnewLineEndApostrope = restOfTable.slice(((indexOfgetFirstPureParanthesis !== -1) ? indexOfgetFirstPureParanthesis + 1 + indexOfnewLineApostrope : indexOfnextComma + 1 + indexOfnewLineApostrope, indexOfgetLastPureParanthesis)).indexOf("\"")
    //   indexOfnewLineEndApostrope = refSlice.indexOf("\"")



    indexOfnewLineApostrope = refSlice.indexOf("\"")
    //  // console.log("indexOfnewLineApostrope", indexOfnewLineApostrope)


    //  // console.log("While loop done!")

    let rowNameSlice = refSlice
    // console.log("rowNameSlice ", rowNameSlice);


    if (indexOfnextLetterFromRef === indexOfgetNextApostropheFromRef) {
      // console.log(" apostrophe key line Found!")
      // console.log("indexOfgetNextApostropheFromRef", indexOfgetNextApostropheFromRef)
      // console.log("indexOfnextLetterFromRef ", indexOfnextLetterFromRef);
      indexOfstartOfRowName = indexOfnextLetterFromRef + 1
      indexOfendOfRowName = rowNameSlice.slice(indexOfnextLetterFromRef, rowNameSlice.length).indexOf(" ") - 2
    } else {
      // console.log(" Key line without apostrophe!")
      // console.log("indexOfgetNextApostropheFromRef", indexOfgetNextApostropheFromRef)
      // console.log("indexOfnextLetterFromRef ", indexOfnextLetterFromRef);
      indexOfstartOfRowName = indexOfnextLetterFromRef
      indexOfendOfRowName = rowNameSlice.slice(indexOfstartOfRowName, rowNameSlice.length).trim().indexOf(" ")

    }

    console.log("Was here1")
    // BELOW is a routine to get the name of the table, and to set the in
    // console.log("indexOfstartOfRowName, indexOfendOfRowName ", indexOfstartOfRowName, indexOfendOfRowName);
    // console.log("indexOfnextComma,indexOfgetFirstApostrophe,indexOfgetFirstParanthesisApostrophe,indexOfgetSecondParanthesis,indexOfnextComma, indexOfgetFirstPureParanthesis")
    console.log("", indexOfgetFirstPureParanthesis, indexOfgetFirstApostrophe, indexOfgetFirstParanthesisApostrophe, indexOfgetSecondParanthesis, indexOfnextComma)
    if ((!(indexOfnextComma === -1) || indexOfnextParanthesisSemicolon >= 4)) {
      console.log("Was here2")
      if ((indexOfgetFirstPureParanthesis !== 0) && (indexOfgetSecondParanthesis !== indexOfnextComma + 3)) {
        //      // console.log("(indexOfgetSecondParanthesis !== indexOfnextComma +3):", Boolean(indexOfgetSecondParanthesis !== indexOfnextComma +3))
        //      // console.log("(indexOfgetFirstApostrophe !== indexOfgetFirstParanthesisApostrophe + 1):", Boolean(indexOfgetFirstApostrophe !== indexOfgetFirstParanthesisApostrophe + 1))
        // // console.log("indexOfgetFirstApostrophe", indexOfgetFirstApostrophe)
        // // console.log("indexOfnextLine", indexOfnextLine)
        // // console.log("restOfTable:-", restOfTable)
        // let indexOfpreviousLineEnd = oldRestOfTable.slice(indexOfgetOldstartOfRowName + 1, restOfTable.length).indexOf('\n')
        // // console.log("indexOfgetOldstartOfRowName", indexOfgetOldstartOfRowName)
        // // console.log("indexOfpreviousLineEnd", indexOfpreviousLineEnd)
        // // console.log("oldRestOfTable:-", oldRestOfTable)
        if ((multipleKeyDetect === false) && (multipleKeyDetectOld === false)) {
          rowName = rowNameSlice.slice(indexOfstartOfRowName, indexOfstartOfRowName + indexOfendOfRowName)
          if (rowName.toLowerCase() !== "foreign") {
            rowArray.push(rowName)
          } else {
            break;
          }
        }
        console.log("Was here2.5")
        console.log("rowName", rowName)
      }
      indexOfnextLineComma = rowNameSlice.indexOf(",")
      //   // console.log("indexOfnextComma", indexOfnextComma)

      sliceForMultipleDetect = rowNameSlice.slice(indexOfnextLineComma - 4, indexOfnextLineComma + 4).replace("\n", "")
      console.log("sliceForMultipleDetect", sliceForMultipleDetect)
      sliceForMultipleDetectCommaPlacement = sliceForMultipleDetect.indexOf(",")
      //  console.log("sliceForMultipleDetect[sliceForMultipleDetectCommaPlacement - 1]", sliceForMultipleDetect[sliceForMultipleDetectCommaPlacement - 1])
      multipleKeyDetect_candidate = Boolean(sliceForMultipleDetect[sliceForMultipleDetectCommaPlacement - 2] === "\",")
      restOfTableForMultipleKeyDetect = restOfTable.slice(restOfTable.indexOf("("), restOfTable.indexOf(")")).trim()

      if (multipleKeyDetect_candidate) {
        // check if theres space error: (extra " " in input before ")")
        if (restOfTableForType.indexOf(")")) {
          console.log("error! spacing in multiple key at (...) detected, multiple key not registered, table:", tableName)
        } else {
          if (restOfTableForMultipleKeyDetect.indexOf("\"")) {
            console.log("multiple key registered, table:", tableName)
          }
          multipleKeyDetect = true;
        }
        console.log("Was here3")
      }

      // console.log("sliceForMultipleDetect", sliceForMultipleDetect)
      sliceForMultipleDetect = rowNameSlice.slice(indexOfnextLineComma + 4, indexOfnextLineComma + 4).replace(" ", "")
      //  if (sliceForMultipleDetect !== "") console.log("got a multiple key here !!!!!!!!!!!!!!", sliceForMultipleDetect)

      primaryKeyDetect = Boolean(rowNameSlice.toLowerCase().search("primary key") !== -1);
      // console.log("lineSlice", (lineSlice));
      // console.log("lineSlice2", (lineSlice2));
      // let cond1 = (lineSlice2.toLowerCase().indexOf("primary key") > lineSlice2.toLowerCase().indexOf(rowName) + 14)
      // let cond2 = (lineSlice2.toLowerCase().indexOf("primary key") < lineSlice2.toLowerCase().indexOf(rowName))
      //   console.log("rowNameSlice", rowNameSlice)

      if (primaryKeyDetect === true) {
        //   // console.log(`${primaryKeyDetect} pushed! top`);
        //   // console.log("rowArrayIndexed", rowArrayIndexed)

        // console.log("rowArrayIndexed", rowArrayIndexed)

        //   console.log("rowArray", rowArray)
        // console.log("multipleKeyDetect", multipleKeyDetect)
        // console.log("rowArrayIndexed.length", rowArrayIndexed.length)
        if (multipleKeyDetect === false) {
          tableKey.push(rowArray[rowArray.length - 1])
          //  console.log("tableKey[rowArray.length-1]", rowArray[rowArrayIndexed.length])
          console.log("Was here4")
          rowArrayIndexed.push(true)
        }
        else {
          console.log("Multiple key detected, new logic here...")
          //  console.log("rowNameSlice", restOfTableForMultipleKeyDetect)
          let getContentOfParanthesis = restOfTableForMultipleKeyDetect.slice(restOfTableForMultipleKeyDetect.indexOf("(") + 1, restOfTableForMultipleKeyDetect.indexOf(")"))
          //  console.log("getContentOfParanthesis", getContentOfParanthesis)
          let tableKeys = getContentOfParanthesis.split(",")
          //    console.log("tableKeys", tableKeys)
          tableKeys = tableKeys.map((value) => { return value.trim().replace("\"", "").replace("\"", "") })
          tableKey.push(...tableKeys)
          let tableKeysIndexed = tableKeys.map((value) => { return true })
          // get index number:
          let getIndex = 0
          console.log("rowArrayIndexed Before: ", rowArrayIndexed);

          for (n in tableKey) {
            getIndex = rowArray.findIndex((val) => {
              return Boolean(val === tableKey[n])
            })
            rowArrayIndexed[getIndex] = true
          }

          console.log("rowArrayIndexed After Multiple key update: ", rowArrayIndexed);
          console.log("Was here5")
        }

        console.log("tableKey", tableKey)
        console.log("multipleKeyDetect", multipleKeyDetect)

        //  // console.log("!cond1, cond2, rowArray, rowArrayIndexed ", !cond1, cond2, rowArray, rowArrayIndexed)

        // if (!cond1 && cond2 ) {
        //     // console.log("!cond1, cond2, rowArray, rowArrayIndexed ", !cond1, cond2, rowArray, rowArrayIndexed)
        // rowArray.pop()
        // rowArrayIndexed.pop()
        primaryKeyDetect = false
        // }
      } else {
        if ((multipleKeyDetect === false) && (multipleKeyDetectOld === false)) {
          rowArrayIndexed.push(false)
        }
        primaryKeyDetect = false
      }
      //     // console.log("primaryKeyDetect", primaryKeyDetect)
      console.log("rowArrayIndexed", rowArrayIndexed)

      /// TYPES FROM HERE ! ///////////////////////////////////////////////////////////////////////////////
      if (firstRow) {
        restOfTableForType = restOfTable.slice(indexOfgetFirstPureParanthesis !== -1 ? indexOfgetFirstPureParanthesis + 1 + indexOfNextRowSpace : 1 + indexOfNextRowSpace, restOfTable.length).trim()
        restOfTableForType = restOfTableForType.slice(restOfTableForType.trim().indexOf(" "), restOfTableForType.length)

      } else {
        restOfTableForType = restOfTable.slice(1 + indexOfNextRowSpace, restOfTable.length).trim()
        restOfTableForType = restOfTableForType.slice(0, restOfTableForType.lastIndexOf(" "))
      }
      firstRow = false;
      //   // console.log("restOfTableForType", restOfTableForType)
      let indexOfNextSpace = restOfTableForType.trim().indexOf(" ")
      let indexOfNextNewLine = restOfTableForType.trim().indexOf(",")
      let indexOfNextparenthesis = restOfTableForType.trim().indexOf("(")
      let indexOfNextEndparenthesis = restOfTableForType.trim().indexOf(")")
      let indexOfNextsquare = restOfTableForType.trim().indexOf("[")
      // indexOfNextsquare = indexOfNextEndparenthesis  // We just want those arrays to go through!

      function getFirstInterrupt(I1, I2, I3, I4) {
        let returner = 0
        let candidate = 0
        let sortedArray = []
        if (I2 < I1 || I1 < 0) { if (I2 < I3 || I3 < 0) { candidate = I2 } else { candidate = I3 } }
        else if (I1 < I3 || I3 < 0) { candidate = I1 } else { candidate = I3 }
        if ((candidate < I4 || I4 <= 0) && I2 > 0) { returner = candidate } else { returner = I4 }

        if (returner === -1) {
          let sortArray = [I1, I2, I3, I4]
          for (i in sortArray) {
            sortedArray = sortArray.sort(function (a, b) { return b - a });
            //         // console.log("sortedArray: ", sortedArray)
            if (sortedArray[i] !== -1) break;
          }
          //      // console.log(`returning sortedArray[${i}]: ${sortedArray[i]}`)
          return sortedArray[i]
        } else {
          return returner
        }

      }

      let requiredDetect = false
      let smallest = getFirstInterrupt(indexOfNextSpace, indexOfNextNewLine, indexOfNextparenthesis, indexOfNextsquare)
      restOfTableRequired = restOfTableForType.slice(0, restOfTableForType.indexOf(","))
      if (Boolean(restOfTableRequired.search("not") >= 0) || Boolean(restOfTableRequired.search("NOT") >= 0)) {
        if ((restOfTableRequired.search("null") >= 0) || (restOfTableRequired.search("NULL") >= 0)) {
          requiredDetect = true
        }
      }

      let EndOfStringDetect = Boolean((7 >= restOfTableForType.length))
      let squareBraceDetect = Boolean((indexOfNextsquare >= 0) && ((indexOfNextsquare <= indexOfNextSpace) || (EndOfStringDetect)))


      // console.log(indexOfNextSpace, indexOfNextNewLine, indexOfNextparenthesis, indexOfNextsquare, indexOfNextEndparenthesis)
      // console.log(smallest)
      rowTypeRaw = restOfTableForType.trim().slice(0, smallest)
      rowTypeRaw = rowTypeRaw.trim()

      if (rowTypeRaw[0] === ',') {
        rowName = ''
        rowTypeRaw = ''
      }

      //    // console.log("EndofStringDetect", EndOfStringDetect)
      //    // console.log("squareBraceDetect", squareBraceDetect)

      if (EndOfStringDetect) {
        rowTypeRaw = restOfTableForType.trim()
        if (squareBraceDetect) {
          rowTypeRaw = restOfTableForType.trim().slice(0, restOfTableForType.trim().indexOf("["))
        }
        rowName = ''
        rowTypeRaw = ''
        rowArray.pop()
      }
      // console.log("rowTypeRaw:-", `|${rowTypeRaw}|`, `|${rowTypeRaw}|`)

      indexOfgetFirstApostrophe2 = restOfTable.indexOf("\"")

      //         // // console.log("indexOfgetFirstApostrophe",indexOfgetFirstApostrophe)

      // good until here

      // indexOfnextComma = restOfTable.slice(1+indexOfgetFirstApostrophe+indexOfgetNextApostrophe,restOfTable.length).indexOf("\"")
      //       // // console.log("indexOfgetNextApostrophe",indexOfgetNextApostrophe)

      // restOfTable = restOfTable.slice(indexOfgetNextApostrophe, restOfTable.length)
      // // // console.log("restOfTable ", restOfTable)

      indexOfnextComma = restOfTable.indexOf(",")


      //     // console.log("Required Detect", requiredDetect)
      let func = rowTypeRaw.toLowerCase()
      //    // console.log("rowTypeRaw.toLocaleLowerCase", func)

      let rowType = ''
      if (rowName) {
        switch (rowTypeRaw.toLowerCase()) {
          case ("boolean"):
            {
              rowType = "boolean"
              break;
            }
          case ("int"):
          case ("integer"):
          case ("smallint"):
          case ("bigint"):
          case ("money"):
            {
              rowType = "number"
              break;
            }
          case ("char"):
          case ("varchar"):
          case ("text"):
          case ("tex"):
            {
              rowType = "string"
              break;
            }
          case ("serial"):
            rowType = "number"
            break;
          case ("uuid"):
            rowType = "string"
            break;
          case ("timestamp"):
          case ("date"):
            {
              rowType = "string"
              break;
            }
          default:
            // console.log("rowType not decoded, the source row type string is:-", rowTypeRaw, squareBraceDetect)
            rowType = "string"
            // console.log("rowtype", rowType)
            // console.log("restOfTableForType", restOfTableForType)
            break;
          // code block
        }

        let rowQueryType = ""
        // console.log("ROW TYPE RAW", rowTypeRaw)
        if (rowName) {
          switch (rowTypeRaw.toLowerCase()) {
            case ("boolean"):
              {
                rowQueryType = "Boolean"
                break;
              }
            case ("int"):
            case ("integer"):
            case ("smallint"):
            case ("bigint"):
            case ("money"):
              {
                rowQueryType = "Int"
                break;
              }
            case ("char"):
            case ("varchar"):
            case ("text"):
            case ("tex"):
              {
                rowQueryType = "String"
                break;
              }
            case ("serial"):
              rowQueryType = "Int"
              break;
            case ("uuid"):
              rowQueryType = "ID"
              break;
            case ("timestamp"):
              {
                rowQueryType = "Datetime"
                break;
              }
            case ("date"):
              {
                rowQueryType = "Date"
                break;
              }
            default:
              // console.log("rowQueryType not decoded, the source row type string is:-", rowTypeRaw, squareBraceDetect)
              rowQueryType = rowTypeRaw.slice(0, 1).toLocaleUpperCase() + rowTypeRaw.slice(1, rowTypeRaw.length)
              // console.log("rowQueryType", rowType)
              break;
            // code block
          }
        }


        //  // console.log("rowType:", rowType)
        //  // console.log("rowQueryType:", rowQueryType)

        squareBraceDetect ? rowType = rowType + "[]" : null;
        squareBraceDetect ? rowQueryType = "[" + rowQueryType + "]" : null;

        requiredDetect ? rowType = rowType + "!" : rowType = rowType + "-";
        requiredDetect ? rowQueryType = rowQueryType + "!" : null;
        //    // console.log("rowType:", rowType)

        // // console.log("rowTypeRaw.toLowerCase() ", rowTypeRaw.toLowerCase())
        if ((rowTypeRaw.toLowerCase() === 'key')) {

          //       // console.log("Foreign key adding, ignoring type array entry function")
        }
        else if (indexOfnextParanthesisSemicolon <= 6) {
          //       // console.log(" restoftable.indexof \");\" is less than 7, end of table detected , ignoring type array entry function")
        }
        else if (rowArrayType.length >= rowArray.length) {
          //       // console.log("No rowArray Name (tableObject.rowArray === undefined /null) , ignoring type array entry function")

        }
        else {

          rowArrayType.push(rowType)
          rowArrayQueryType.push(rowQueryType)

          // // console.log("rowTypeRaw.toLowerCase", rowTypeRaw.toLowerCase())

          // // console.log("rowArrayIndexed ", rowArrayIndexed)
          // // console.log("rowArrayType.length - 1 ", (rowArrayType.length - 1))

          //// console.log("here we are goint to find if the row is indexed!!! ")
          //  // console.log("indexed: rowName", rowName)
          //   // console.log("indexed: restOfTable", cutOffpart)
          let IcutOffpart2 = cutOffpart.slice(placementOfNextnn, placementOfNextTable2)
          //  // console.log("indexed: IcutOffpart2", IcutOffpart2)
          //        // console.log("!! ", `CREATE INDEX ON ${tableNamePre}("${rowName}")`)
          let getThatIndex = IcutOffpart2.indexOf(`CREATE INDEX ON ${tableNamePre}("${rowName}")`)
          //  // console.log("indexed: getThatIndex ", getThatIndex)
          // Overwrite rowArrayIndexed only when indexed. if not indexed values remain from "if primary key"
          if (getThatIndex !== -1) {
            if (!rowArrayIndexed[rowArrayType.length - 1] === true) {
              //     // console.log("true pushed!", rowArrayIndexed[rowArrayType.length - 1])
              // rowArrayIndexed[rowArrayType.length - 1] = true
            }
          }
          else {
            if (!rowArrayIndexed[rowArrayType.length - 1] === true) {
              // rowArrayIndexed[rowArrayType.length - 1] = false
              //    // console.log("false pushed!", rowArrayIndexed[rowArrayType.length - 1])
            }
          }
        }

      }
    }


    // // // console.log("restOfTable ", restOfTable)
    else {    // restOfTable = restOfTable.slice(indexOfnextComma + 1, restOfTable.length)
      // // console.log("restofTable", restOfTable)
      // indexOfnextComma = restOfTable.indexOf(",")
      // // console.log("skipped rowArray.push for this row")
    }

    multipleKeyDetectOld = multipleKeyDetect

    if (multipleKeyDetect) {
      multipleKeyDetect = false
      //     // console.log(" multipleKeyDetected set FALSE ! (reset)")
    }

    let restOfTableOld = restOfTable
    restOfTable = restOfTable.slice(1 + indexOfnextComma, restOfTable.length).trim()
    //   // console.log("ONE LINE LESS!", restOfTable)


    if (restOfTableOld === restOfTable) lastLineDetect = true
    if (lastLineDetect === true) {
      //     // console.log("Previous Line was Last in table, exiting WHILE loop.")
      break;
    }
    indexOfnextComma = restOfTable.indexOf(",")
    // console.log("------- ")
  }



  //  // // console.log("RowArray", rowArray)

  let rowArrayPart1 = []
  let rowArrayPart2 = []
  let removedRows = []
  if (rowArray !== undefined) {
    rowArray.forEach((value, index, array) => {
      // // // console.log("index", index)
      array.forEach((value2, index2) => {
        if (index !== index2) {
          // // // console.log("index,index2", index, index2)
          notRemoved = true
          for (i in removedRows) {
            (removedRows[i] === value) ? notRemoved = false : null
          }
          if (value === value2 && notRemoved === true) {
            rowArrayPart1 = rowArray.slice(0, index2)
            rowArrayPart2 = rowArray.slice(index2 + 1, rowArray.length)
            //  // // console.log("rowArrayPart1", rowArrayPart1)
            //  // // console.log("rowArrayPart2", rowArrayPart2)
            rowArray = rowArrayPart1.concat(rowArrayPart2)
            array = rowArrayPart1.concat(rowArrayPart2)
            //     // console.log("rowArray", rowArray)
            removedRows.push(value)
          }
        }
      })
    })


    if (tableName !== '') {

      tableObject = { tableName: tableName, rowArray: rowArray, tableKey: tableKey, rowArrayType: rowArrayType, rowArrayQueryType: rowArrayQueryType, rowArrayIndexed: rowArrayIndexed }
      // // // console.log("tableObject", tableObject)
      console.log("tableObject", tableObject)
      tableObjectArray.push(tableObject)
      // console.log("tableObjectArray", tableObjectArray)

      //// correcting for Foreign key adding type etc to array (but no name), so deleting array entry here

    }
  } else {
    // // console.log("Row is null, no table")
  }
  // // // console.log("RowArray", rowArray)


}

// // console.log("tableObjectArray", tableObjectArray)

let tableType = ['']
let storeType = ['']
let importType = ['']
let classImportType = ['']
let classImportClassType = ['']
let mapToClassType = ['']
let bindImportType = ['']
let transformType = ['']
let classType = ['']

let classClass = ['']
let tableAtAgencyEnumHelper = ['']
let tableEnumHelper = ['']
let psqlQuery = ['']
let psqlIdQuery = ['']


let psqlConditionalQuery = ['']
let psqlIdQueryType = ['']
let psqlNodeQueryType = ['']
let psqlAgencyQueryType = ['']
let psqlConditionalQueryType = ['']
let idQueryType = ['']
let nodeQueryType = ['']
let agencyQueryType = ['']
let conditionalQueryType = ['']

let psqlAgencyQuery = ['']
let psqlNodeQuery = ['']

let psqlUpdateMutation = ['']
let psqlUpdateMutationType = ['']
let psqlCreateMutation = ['']
let psqlCreateMutationType = ['']
let psqlDeleteMutation = ['']
let psqlDeleteMutationType = ['']
let psqlQueryHelper = ['']
let psqlConditionalQueryTypeHelper = ['']
let psqlUpdateHelper1 = ['']
let psqlUpdateHelper2 = ['']
let psqlCreateHelper1 = ['']
let queryImportType = ['']
let deleteMutationImportType = ['']
let createMutationImportType = ['']
let updateMutationImportType = ['']
let idQueryImportType = ['']
let nodeQueryImportType = ['']
let agencyQueryImportType = ['']
let conditionalQueryImportType = ['']
let psqlQueryType = ['']
let psqlEnums = ['']
let queryLookupType = ['']
let updateMutationLookupType = ['']
let createMutationLookupType = ['']
let deleteMutationLookupType = ['']
let mutationLookupType = ['']
let queryAgencyLookupType = ['']
let idQueryLookupType = ['']
let agencyQueryLookupType = ['']
let conditionalQueryLookupType = ['']
let nodeQueryLookupType = ['']
let reduxInitial = ['']
let reduxImportType = ['']
let updateImportType = ['']
let createImportType = ['']
let deleteImportType = ['']
let queryIdImportType = ['']
let queryNodeImportType = ['']
let queryConditionalImportType = ['']
let queryAgencyImportType = ['']
let apiDbInterface = ['']
let transformTypeHelper = []
let classTypeHelper = []
let createMutationTypeHelper = []
let updateMutationTypeHelper = []
let ConditionalQueryTypeHelper1 = []
let ConditionalQueryTypeHelper2 = []

let classTypeHelper2 = []
let enumsTypesHelper = []
// // // console.log("tableObjectArray", tableObjectArray)
let tableNameCased = ['']
let rowarrayToTypes = []
let newTableNamePlural = ['']
let tableAtAgencyNameCased = ['']

for (i in enumsArray) {

  enumsTypesHelper[i] = enumsArray[i].enumTypes.map((value, index) => { return `  ${value} = \'${value}\'\n` })

  psqlEnums[i] = `export enum ${enumsArray[i].enumName} {
     ${enumsTypesHelper[i]}
   }`

  fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/enums/${enumsArray[i].enumName}.ts`, psqlEnums[i]);
}

for (i in tableObjectArray) {

  // helpers
  tableNameCased[i] = `${tableObjectArray[i].tableName.slice(0, 1).toLocaleUpperCase()}${tableObjectArray[i].tableName.slice(1, tableObjectArray[i].tableName.length)}`
  rowarrayToTypes[i] = tableObjectArray[i].rowArray[0] && tableObjectArray[i].rowArray.map((value, index) => value)
  // // // console.log("rowarrayToTypes",rowarrayToTypes)
  // .forEach( () => { return thisstring = ':sadsad' } )}

  tableType[i] = `public ${tableObjectArray[i].tableName}?: Dexie.Table<${tableObjectArray[i].tableName}DbType, number>;\n`;
  reduxInitial[i] = ` ${tableObjectArray[i].tableName}: undefined`;
  apiDbInterface[i] = ` ${tableObjectArray[i].tableName}: ${tableObjectArray[i].tableName}DbType`;


  storeType[i] = `${tableObjectArray[i].tableName}: '${tableObjectArray[i].rowArray.toString()}'\n`;
  psqlUpdateHelper1[i] = tableObjectArray[i].tableKey.map((value, index) => { return `$${tableObjectArray[i].tableKey[index]}: ${tableObjectArray[i].tableKey[index]} ` });
   psqlUpdateHelper2[i] = tableObjectArray[i].rowArray.map((value, index) => { if (tableObjectArray[i].rowArray[index] !== 'id') { return `${tableObjectArray[i].rowArray[index]}: $${tableObjectArray[i].rowArray[index]} ` } });
   psqlUpdateHelper3[i] = tableObjectArray[i].tableKey.map((value, index) => { return `$${tableObjectArray[i].tableKey[index]}: ${tableObjectArray[i].tableKey[index]} ` });

   psqlCreateHelper1[i] = tableObjectArray[i].rowArray.map((value, index) => { if (tableObjectArray[i].rowArray[index] !== 'id') { return `$${tableObjectArray[i].rowArray[index]}: ${tableObjectArray[i].rowArrayQueryType[index]} ` } });
  importType[i] = `${tableNameCased[i]}`;
  classImportType[i] = `import type { ${tableObjectArray[i].tableName}DbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/${tableObjectArray[i].tableName}DbType'\n`
  queryImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlIdQueries/${tableObjectArray[i].tableName}'\n`
  createMutationImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlCreateMutation/${tableObjectArray[i].tableName}'\n`
  updateMutationImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlUpdateMutation/${tableObjectArray[i].tableName}'\n`
  deleteMutationImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlDeleteMutation/${tableObjectArray[i].tableName}'\n`
  queryNodeImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlNodeQueries/${tableObjectArray[i].tableName}'\n`
  queryLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}`
  mutationLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}DbType;`
  updateMutationLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}updateMutationType;`
  createMutationLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}createMutationType;`
  deleteMutationLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}deleteMutationType;`

  idQueryLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}IdQueryType;`
  nodeQueryLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}NodeQueryType;`
  conditionalQueryLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}ConditionalQueryType;`
  agencyQueryLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}AgencyQueryType;`
  idQueryType[i] = `import type { ${tableObjectArray[i].tableName}idQueryType }  from './psqlIdQuery/types/${tableObjectArray[i].tableName}'\n`
  nodeQueryType[i] = `import type { ${tableObjectArray[i].tableName}nodeQueryType }  from './psqlNodeQuery/types/${tableObjectArray[i].tableName}'\n`
  conditionalQueryType[i] = `import type { ${tableObjectArray[i].tableName}conditionalQueryType }  from './psqlConditionalQuery/types/${tableObjectArray[i].tableName}'\n`
  agencyQueryType[i] = `import type { ${tableObjectArray[i].tableName}agencyQueryType }  from './psqlAgencyQuery/types/${tableObjectArray[i].tableName}'\n`


  reduxImportType[i] = `import type { ${tableObjectArray[i].tableName}DbType }  from '../../../dexie/dbTypes/__generatedFromBackend__/types/${tableObjectArray[i].tableName}DbType'\n`
  createImportType[i] = `import type { ${tableObjectArray[i].tableName}createMutationType }  from './psqlCreateMutation/types/${tableObjectArray[i].tableName}'\n`
  updateImportType[i] = `import type { ${tableObjectArray[i].tableName}updateMutationType }  from './psqlUpdateMutation/types/${tableObjectArray[i].tableName}'\n`
  deleteImportType[i] = `import type { ${tableObjectArray[i].tableName}deleteMutationType }  from './psqlDeleteMutation/types/${tableObjectArray[i].tableName}'\n`

  idQueryImportType[i] = `import type { ${tableObjectArray[i].tableName}IdQueryType }  from './psqlIdQueries/types/${tableObjectArray[i].tableName}'\n`
  nodeQueryImportType[i] = `import type { ${tableObjectArray[i].tableName}NodeQueryType }  from './psqlNodeQueries/types/${tableObjectArray[i].tableName}'\n`
  conditionalQueryImportType[i] = `import type { ${tableObjectArray[i].tableName}ConditionalQueryType }  from './psqlConditionalQueries/types/${tableObjectArray[i].tableName}'\n`
  agencyQueryImportType[i] = `import type { ${tableObjectArray[i].tableName}AgencyQueryType }  from './psqlAgencyQueries/types/${tableObjectArray[i].tableName}'\n`


  classImportClassType[i] = `import { ${tableNameCased[i]}DbClass } from '../dexie/tableClasses/__generatedFromBackend__/${tableNameCased[i]}DbClass'\n`
  bindImportType[i] = `this.${tableObjectArray[i].tableName} = this.table("${tableObjectArray[i].tableName}")\n`
  mapToClassType[i] = `this.${tableObjectArray[i].tableName}.mapToClass(${tableNameCased[i]}DbClass)\n`
  tableEnumHelper[i] = `\n ${tableObjectArray[i].tableName} = '${tableObjectArray[i].tableName}'`;

  transformTypeHelper[i] = tableObjectArray[i].rowArray.map((value, index) => { return ` ${value}: raw.${value}` })
  // switch (tableObjectArray[i].rowArrayType[index]) {

  //     case ("boolean"):
  //         return `${value}: raw.${value}`
  //         break;

  //     case ("integer"):
  //         return `${value}: raw.${value}`
  //             break;

  //     case ("string"):
  //         return `${value}: \`$\{raw.${value}}\``
  //             break;

  //     default:
  //         // no comment
  //         break;
  // }

  try {
    classTypeHelper[i] = tableObjectArray[i].rowArray.map((value, index) => {
      let question = ""


      let booldecider = Boolean(tableObjectArray[i] && tableObjectArray[i].rowArrayType && tableObjectArray[i].rowArrayType[index].lastIndexOf("!") !== -1);

      (booldecider) ? null : (question = '?')
      return `${value}${question}: ${tableObjectArray[i].rowArrayType[index].slice(0, tableObjectArray[i].rowArrayType[index].length - 1)};\n`
    })


    // console.log("classTypeHelper", classTypeHelper[i])
    createMutationTypeHelper[i] = tableObjectArray[i].rowArray.map((value, index) => {
      let returnString = ""
      let booldecider = Boolean(tableObjectArray[i] && tableObjectArray[i].rowArrayType && tableObjectArray[i].rowArrayType[index].lastIndexOf("!") !== -1);

      (booldecider) ? returnString = `${value}: ${tableObjectArray[i].rowArrayType[index].slice(0, tableObjectArray[i].rowArrayType[index].length - 1)};\n`
        : returnString = ``
      return returnString
    })
    // console.log("createMutationTypeHelper[i] ", createMutationTypeHelper[i])
    updateMutationTypeHelper[i] = tableObjectArray[i].rowArray.map((value, index) => {
      let returnString = "";
      let booldecider = Boolean(tableObjectArray[i] && tableObjectArray[i].rowArrayType && tableObjectArray[i].rowArrayType[index].lastIndexOf("!") !== -1);

      if (index === 0) { returnString = `${value}: ${tableObjectArray[i].rowArrayType[index].slice(0, tableObjectArray[i].rowArrayType[index].length - 1)};\n` }
      else if (booldecider === false) {
        returnString = `${value}?: ${tableObjectArray[i] && tableObjectArray[i].rowArrayType && tableObjectArray[i].rowArrayType[index].slice(0, tableObjectArray[i].rowArrayType[index].length - 1)};\n`
      }
      else if (booldecider === true) { returnString = null }
      return returnString
    })

    ConditionalQueryTypeHelper1[i] = tableObjectArray[i].rowArrayIndexed.map((value, index) => { if (tableObjectArray[i].rowArrayIndexed[index] === true) return `$${tableObjectArray && tableObjectArray.rowArrayType && tableObjectArray[i].rowArray[index]}:  ${tableObjectArray && tableObjectArray.rowArrayType && tableObjectArray[i].rowArrayType[index].slice(0, tableObjectArray[i].rowArrayType[index].length - 1)} ` })
    ConditionalQueryTypeHelper2[i] = tableObjectArray[i].rowArrayIndexed.map((value, index) => { if (tableObjectArray[i].rowArrayIndexed[index] === true) return `${tableObjectArray && tableObjectArray.rowArrayType && tableObjectArray[i].rowArray[index]}: $${tableObjectArray && tableObjectArray.rowArrayType && tableObjectArray[i].rowArray[index]} ` })
    psqlConditionalQueryTypeHelper[i] = tableObjectArray[i].rowArrayIndexed.map((value, index) => { if (tableObjectArray[i].rowArrayIndexed[index] === true) return ` ${tableObjectArray && tableObjectArray.rowArrayType && tableObjectArray[i].rowArray[index]}?:  ${tableObjectArray && tableObjectArray.rowArrayType && tableObjectArray[i].rowArrayType[index].slice(0, tableObjectArray[i].rowArrayType[index].length - 1)};\n` })

    classTypeHelper[i] = classTypeHelper[i].concat(' nodeId?: string;\n')
    classTypeHelper2[i] = tableObjectArray[i].rowArray.map((value, index) => { return `    this.${value} = ${value}\n` })
    classTypeHelper2[i] = classTypeHelper2[i].concat('    this.nodeId = nodeId\n')
    psqlQueryHelper[i] = `${tableObjectArray[i].rowArray.toString().replace(/,/g, " ")}\n`

    transformType[i] = `import { ${tableObjectArray[i].tableName}DbType as obj${tableNameCased[i]} } from '../../../dbTypes/__generatedFromBackend__/types/${tableObjectArray[i].tableName}DbType'\n
import { ${tableNameCased[i]}  as gql${tableNameCased[i]} } from '*.graphqls'\n\n
export const ${tableNameCased[i]}Transform = (raw: gql${tableNameCased[i]}): obj${tableNameCased[i]} => {
    return {
        ${transformTypeHelper[i]}
    }
}

// if editing the transform, make a manual ${tableNameCased[i]}ClassType instead of the line below
export type ${tableNameCased[i]}ClassType = obj${tableNameCased[i]}`


    classType[i] = `export interface ${tableObjectArray[i].tableName}DbType {\n${classTypeHelper[i].toString().replace(/,/g, "")}}\n`

    psqlUpdateMutationType[i] = `export interface ${tableObjectArray[i].tableName}updateMutationType {\n${updateMutationTypeHelper[i].toString().replace(/,/g, "")}}\n`
    psqlCreateMutationType[i] = `export interface ${tableObjectArray[i].tableName}createMutationType {\n${createMutationTypeHelper[i].toString().replace(/,/g, "")}}\n`
    psqlDeleteMutationType[i] = `export interface ${tableObjectArray[i].tableName}deleteMutationType {\nid: number; \n}\n`

    psqlIdQueryType[i] = `export interface ${tableObjectArray[i].tableName}IdQueryType {\nid: number; \n}\n`
    psqlNodeQueryType[i] = `export interface ${tableObjectArray[i].tableName}NodeQueryType {\nnodeId: string; \n}\n`
    psqlAgencyQueryType[i] = `export interface ${tableObjectArray[i].tableName}AgencyQueryType {\natAgency: number; id: number; \n}\n`
    psqlConditionalQueryType[i] = `export interface ${tableObjectArray[i].tableName}ConditionalQueryType {\n${psqlConditionalQueryTypeHelper[i].toString().replace(/,/g, "")}}\n`



    classClass[i] = `import { ${tableObjectArray[i].tableName}DbType as ${tableNameCased[i]}DbType } from '../../dbTypes/__generatedFromBackend__/types/${tableObjectArray[i].tableName}DbType'\n\nexport class ${tableNameCased[i]}DbClass implements ${tableNameCased[i]}DbType {\n${classTypeHelper[i].toString().replace(/,/g, "")}\n  constructor(${classTypeHelper[i].toString().replace(/,/g, "").replace(/\n/g, "").replace(/;/g, ",")}) {\n${classTypeHelper2[i].toString().replace(/,/g, "")}  }\n//  add methods here and move to 'edited' folder\n}`



    let strlength = (tableObjectArray[i].tableName.length - 1)
    // // console.log("strlength", strlength)
    tableObjectArray[i].tableName.endsWith("y") ?
      newTableNamePlural[i] = tableObjectArray[i].tableName.slice(0, strlength) + 'ies' : newTableNamePlural[i] = tableObjectArray[i].tableName + 's'

    tableAtAgencyNameCased[i] = `${newTableNamePlural[i].slice(0, 1).toLocaleUpperCase()}${newTableNamePlural[i].slice(1, newTableNamePlural[i].length)}`

    tableAtAgencyEnumHelper[i] = `\n ${tableObjectArray[i].tableName} = '${newTableNamePlural[i]}'`;

    queryAgencyImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlAgencyQueries/${tableObjectArray[i].tableName}'\n`
    queryIdImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlIdQueries/${tableObjectArray[i].tableName}'\n`
    queryConditionalImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlConditionalQueries/${tableObjectArray[i].tableName}'\n`
    queryNodeImportType[i] = `import ${tableObjectArray[i].tableName} from './psqlNodeQueries/${tableObjectArray[i].tableName}'\n`
    queryAgencyLookupType[i] = `\n${tableObjectArray[i].tableName}:  ${tableObjectArray[i].tableName}`


    psqlIdQuery[i] = `export const query = \`query ${tableNameCased[i]}($${tableObjectArray[i].rowArray[0]}: Int!) {
        __typename
        ${tableObjectArray[i].tableName}(id: $${tableObjectArray[i].rowArray[0]}) {
            ${psqlQueryHelper[i]}
        }
      }\`
      export default \`$\{query\}\`
`


    psqlConditionalQuery[i] = `export const query = \`query getConditional${tableNameCased[i]}(${ConditionalQueryTypeHelper1[i].toString().replace(/,/g, "").replace(/\$/g, ", $")}) {
        __typename
        ${newTableNamePlural[i]}(condition: {${ConditionalQueryTypeHelper2[i].toString()} })  {
          nodes {
            ${psqlQueryHelper[i]}
          }
        }
      }\`
      export default \`$\{query\}\`
        `

    psqlAgencyQuery[i] = `export const query = \`query getAgency${newTableNamePlural[i]}($atAgency: Int!, $id: Int) {
        __typename
        ${newTableNamePlural[i]}(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            ${psqlQueryHelper[i]}
          }
        }
      }\`
      export default \`$\{query\}\`
     `

    psqlNodeQuery[i] = `export const query = \`query getNode${tableObjectArray[i].tableName}($nodeId: String!) {
        __typename
        ${tableObjectArray[i].tableName}ByNodeId(nodeId: $nodeId }) {
            ${psqlQueryHelper[i]}
        }
      }\`
      export default \`$\{query\}\`
     `

    psqlUpdateMutation[i] = `export const mutation = \`mutation update${tableNameCased[i]}(${psqlUpdateHelper3[i]}) {
        __typename
        update${tableNameCased[i]}(input: {patch: {${psqlUpdateHelper2[i]}}, ${psqlUpdateHelper1[i]}}) {
            id
            clientMutationId
            }
          }\`
          export default \`$\{mutation}\`
     `


    psqlCreateMutation[i] = `export const mutation = \`mutation create${tableNameCased[i]}(${psqlCreateHelper1[i]}, $id: String!) {
        __typename
        create${tableNameCased[i]}(input: {id: $id,${tableObjectArray[i].tableName}: {${psqlUpdateHelper2[i]}}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }\`
          export default \`$\{mutation}\`
     `


    psqlDeleteMutation[i] = `export const mutation = \`mutation delete${tableNameCased[i]}(${psqlUpdateHelper1[i][0]}, $id: String!) {
        __typename
        delete${tableNameCased[i]}(input: {id: $id}) {
            id
            }
          }\`
          export default \`$\{mutation}\`
     `





    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/dexie/transformations/__generatedFromBackend__/types/${tableNameCased[i]}DbTransformation.ts`, transformType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/dexie/dbTypes/__generatedFromBackend__/types/${tableObjectArray[i].tableName}DbType.ts`, classType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/dexie/tableClasses/__generatedFromBackend__/${tableNameCased[i]}DbClass.ts`, classClass[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlIdQueries/${tableObjectArray[i].tableName}.ts`, psqlIdQuery[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlAgencyQueries/${tableObjectArray[i].tableName}.ts`, psqlAgencyQuery[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlNodeQueries/${tableObjectArray[i].tableName}.ts`, psqlNodeQuery[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlConditionalQueries/${tableObjectArray[i].tableName}.ts`, psqlConditionalQuery[i]);

    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlIdQueries/types/${tableObjectArray[i].tableName}.ts`, psqlIdQueryType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlAgencyQueries/types/${tableObjectArray[i].tableName}.ts`, psqlAgencyQueryType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlNodeQueries/types/${tableObjectArray[i].tableName}.ts`, psqlNodeQueryType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/psqlConditionalQueries/types/${tableObjectArray[i].tableName}.ts`, psqlConditionalQueryType[i]);

    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/psqlUpdateMutation/${tableObjectArray[i].tableName}.ts`, psqlUpdateMutation[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/psqlCreateMutation/${tableObjectArray[i].tableName}.ts`, psqlCreateMutation[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/psqlDeleteMutation/${tableObjectArray[i].tableName}.ts`, psqlDeleteMutation[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/psqlCreateMutation/types/${tableObjectArray[i].tableName}.ts`, psqlCreateMutationType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/psqlUpdateMutation/types/${tableObjectArray[i].tableName}.ts`, psqlUpdateMutationType[i]);
    fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/psqlDeleteMutation/types/${tableObjectArray[i].tableName}.ts`, psqlDeleteMutationType[i]);

  } catch {
    (error) => {

      console.log("tableObjectArray", tableObjectArray[i])
      console.log("Error!: ", error)
    }

  }


}
//    return  `${value[index]}: \`\$\{raw.${value[index]}\}\``



let classImports = classImportType.toString().replace(/,/g, "")
let queryAgencyImports = queryAgencyImportType.toString().replace(/,/g, "")
let queryNodeImports = queryNodeImportType.toString().replace(/,/g, "")
let queryImports = queryImportType.toString().replace(/,/g, "")
let deleteMutationImports = deleteMutationImportType.toString().replace(/,/g, "")
let createMutationImports = createMutationImportType.toString().replace(/,/g, "")
let updateMutationImports = updateMutationImportType.toString().replace(/,/g, "")
let queryLookup = queryLookupType.toString()

let mutationLookup = mutationLookupType.toString().replace(/,/g, "")
let updateMutationLookup = updateMutationLookupType.toString().replace(/,/g, "")
let createMutationLookup = createMutationLookupType.toString().replace(/,/g, "")
let deleteMutationLookup = deleteMutationLookupType.toString().replace(/,/g, "")
let idQueryLookup = idQueryLookupType.toString().replace(/,/g, "")
let nodeQueryLookup = nodeQueryLookupType.toString().replace(/,/g, "")
let conditionalQueryLookup = conditionalQueryLookupType.toString().replace(/,/g, "")
let agencyQueryLookup = agencyQueryLookupType.toString().replace(/,/g, "")

let tableAtAgencyEnum = tableAtAgencyEnumHelper.toString()
let tableEnum = tableEnumHelper.toString()

let reduxImports = reduxImportType.toString().replace(/,/g, "")

let updateImportTypes = updateImportType.toString().replace(/,/g, "")
let createImportTypes = createImportType.toString().replace(/,/g, "")
let deleteImportTypes = deleteImportType.toString().replace(/,/g, "")

let idQueryImportTypes = idQueryImportType.toString().replace(/,/g, "")
let nodeQueryImportTypes = nodeQueryImportType.toString().replace(/,/g, "")
let conditionalQueryImportTypes = conditionalQueryImportType.toString().replace(/,/g, "")
let agencyQueryImportTypes = agencyQueryImportType.toString().replace(/,/g, "")



let classImportClass = classImportClassType.toString().replace(/,/g, "")
let mapToClass = mapToClassType.toString().replace(/,/g, "")
let bindImport = bindImportType.toString().replace(/,/g, "")

let importTable = importType.toString()
importTable = "{ " + importTable.replace(/,/g, ", ").replace(/;\n,/g, ";\n") + " }"

let typeTable = tableType.toString()
typeTable = typeTable.replace(/;\n,/g, ";\n")
let storeTable = storeType.toString().replace(/,/g, ", ").replace(/\n,/g, ",\n")

let reduxInitialstate = `export const apiDbDefaults = {
    status: undefined, error: undefined, ${reduxInitial}
      };
      `

let reduxAllTypes = `
          ${reduxImports}

          export default interface apiDbTypes {
            ${apiDbInterface}
          }
          `

fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBTypeStrings.txt', typeTable);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBStoreStrings.txt', storeTable);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBImportString.txt', importTable);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBclassImportString.txt', classImports);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBmapToClassString.txt', mapToClass);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBbindImportString.txt', bindImport);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBclassImportClassString.txt', classImportClass);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBreduxInitialStateString.txt', reduxInitialstate);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBreduxAllTypesString.txt', reduxAllTypes);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBtableAtAgencyEnumString.txt', tableAtAgencyEnum);
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/DexieDBtableObjectArrays.txt', tableObjectArray);



let getAgencyQueryFile = `
${queryAgencyImports}

${agencyQueryImportTypes}
const Lookup = {
    ${queryLookup}
}

export type agencyQueryType = {
    ${agencyQueryLookup}
}


export function getAgencyQuery (queryName: string) {



    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
`

let getNodeQueryFile = `
${queryNodeImports}

${nodeQueryImportTypes}
const Lookup = {
    ${queryLookup}
}

export type nodeQueryType = {
    ${nodeQueryLookup}
}

export function getNodeQuery (queryName: string) {


    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
`


let getIdQueryFile = `
${queryImports}

${idQueryImportTypes}

const Lookup = {
    ${queryLookup}
}

export type idQueryType = {
    ${idQueryLookup}
}

export function getIdQuery (queryName: string) {

    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
`

let getConditionalQueryFile = `
${queryImports}

${conditionalQueryImportTypes}
const Lookup = {
    ${queryLookup}
}

export type conditionalQueryType = {
    ${conditionalQueryLookup}
}

export function getConditionalQuery (queryName: string) {

    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
`



let getUpdateMutationFile = `
${updateMutationImports}
${updateImportTypes}
import { DbTables } from '../../functions/__generatedFromBackend__/tableEnums'

export const Lookup = {
    ${queryLookup}
}

export type updateMutationType = {
    ${updateMutationLookup}
}

export function getUpdateMutation(DbTablesSelection: keyof typeof DbTables) {
    // // console.log('queryName:', DbTablesSelection)

     let queryNameAsString = DbTables[DbTablesSelection]
   //  // console.log('queryNameAsString:', queryNameAsString)
     // const key = 'destinationresource'
     type getUpdateMutationTypes = updateMutationType[typeof queryNameAsString]
   //  type Picked = Exclude<getUpdateMutationTypes, "object" >;
     const getTypesFromEmpty: getUpdateMutationTypes = {}


     const query = Lookup[DbTablesSelection]
     // console.log('query:', query)

     return { query, getTypesFromEmpty }
 }

`

let getDeleteMutationFile = `
${deleteMutationImports}
${deleteImportTypes}
import { DbTables } from '../../functions/__generatedFromBackend__/tableEnums'

export const Lookup = {
    ${queryLookup}
}

export type deleteMutationType = {
    ${deleteMutationLookup}
}

export function getDeleteMutation(DbTablesSelection: keyof typeof DbTables) {
    // // console.log('queryName:', DbTablesSelection)

     let queryNameAsString = DbTables[DbTablesSelection]
   //  // console.log('queryNameAsString:', queryNameAsString)
     // const key = 'destinationresource'
     type getDeleteMutationTypes = deleteMutationType[typeof queryNameAsString]
   //  type Picked = Exclude<getDeleteMutationTypes, "object" >;
     const getTypesFromEmpty: getDeleteMutationTypes = {}


     const query = Lookup[DbTablesSelection]
     // console.log('query:', query)

     return { query, getTypesFromEmpty }
 }

`

let getCreateMutationFile = `
${createMutationImports}
${createImportTypes}
import { DbTables } from '../../functions/__generatedFromBackend__/tableEnums'

export const Lookup = {
    ${queryLookup}
}

export type createMutationType = {
    ${createMutationLookup}
}

export function getCreateMutation(DbTablesSelection: keyof typeof DbTables) {
    // // console.log('queryName:', DbTablesSelection)

     let queryNameAsString = DbTables[DbTablesSelection]
   //  // console.log('queryNameAsString:', queryNameAsString)
     // const key = 'destinationresource'
     type getCreateMutationTypes = createMutationType[typeof queryNameAsString]
   //  type Picked = Exclude<getCreateMutationTypes, "object" >;
     const getTypesFromEmpty: getCreateMutationTypes = {}


     const query = Lookup[DbTablesSelection]
     // console.log('query:', query)

     return { query, getTypesFromEmpty }
 }

`

let newDexieDbFile = `
import Dexie from 'dexie'\n
${classImports}
${classImportClass}

\n
class ${dexieDBName} extends Dexie {
    ${typeTable}
\n
constructor() {
    super('${dexieDBName}')
    this.version(1).stores({
        ${storeTable}
    })
    ${bindImport}
    ${mapToClass}
 }
}

export default ${dexieDBName}
`

let tableAtAgencyEnumFile = `export enum AtAgencyTables {
  ${tableAtAgencyEnum}
}
`
let tableEnumFile = `export enum DbTables {
    ${tableEnum}
  }
  `

fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/redux/reducers/__generatedFromBackend__/DexieDBreduxInitialStateString.ts`, reduxInitialstate);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/redux/reducers/__generatedFromBackend__/DexieDBallTypes.ts`, reduxAllTypes);

fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/db/dexieDBgenerated.ts', newDexieDbFile);
console.log("wrote dexieDBgenerated to frontend")
fs.writeFileSync('/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/db/getTypesFromDump/dexieDBgenerated.ts', newDexieDbFile);

fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/getIdQuery.ts`, getIdQueryFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/getAgencyQuery.ts`, getAgencyQueryFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/getNodeQuery.ts`, getNodeQueryFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlqueries/getConditionalQuery.ts`, getConditionalQueryFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/getCreateMutation.ts`, getCreateMutationFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/getDeleteMutation.ts`, getDeleteMutationFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/__generatedFromBackend__/psqlmutations/getUpdateMutation.ts`, getUpdateMutationFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/functions/__generatedFromBackend__/AtAgencyTables.ts`, tableAtAgencyEnumFile);
fs.writeFileSync(`/home/soreng/Web_Development/Development_projects/TouristStarter-3.0.1/@app/client/src/functions/__generatedFromBackend__/tableEnums.ts`, tableEnumFile);

