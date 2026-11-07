export const quizData = {
  sheets: {
    1: [
      {
        question: "What is a spreadsheet mainly used for?",
        options: [
          "Editing videos",
          "Organizing and calculating data",
          "Playing games",
          "Browsing websites"
        ],
        answer: 1,
        explanation: "Spreadsheets organize information and perform calculations."
      },
      {
        question: "Which of these is a spreadsheet application?",
        options: ["MS Excel", "Paint", "Notepad", "VLC Player"],
        answer: 0,
        explanation: "Microsoft Excel is a popular spreadsheet application."
      },
      {
        question: "What is a cell in a spreadsheet?",
        options: [
          "A complete worksheet",
          "A single box formed by a row and column",
          "A computer folder",
          "A chart"
        ],
        answer: 1,
        explanation: "A cell is the intersection of a row and a column."
      },
      {
        question: "What do rows run?",
        options: ["Vertically", "Diagonally", "Horizontally", "In circles"],
        answer: 2,
        explanation: "Rows run horizontally across a spreadsheet."
      },
      {
        question: "How are columns generally identified in Excel?",
        options: ["Numbers", "Letters", "Colours", "Symbols"],
        answer: 1,
        explanation: "Columns use letters such as A, B and C."
      },
      {
        question: "How are rows generally identified?",
        options: ["Letters", "Numbers", "Colours", "Shapes"],
        answer: 1,
        explanation: "Rows are identified using numbers such as 1, 2 and 3."
      },
      {
        question: "What does the cell reference B3 mean?",
        options: [
          "Column B and row 3",
          "Row B and column 3",
          "Worksheet B3",
          "The third spreadsheet"
        ],
        answer: 0,
        explanation: "B3 refers to the cell in column B and row 3."
      },
      {
        question: "Which symbol usually starts a formula in Excel?",
        options: ["#", "=", "@", "&"],
        answer: 1,
        explanation: "Excel formulas begin with the equals sign."
      },
      {
        question: "What is a worksheet?",
        options: [
          "A single spreadsheet page",
          "A computer keyboard",
          "A file extension",
          "A chart type"
        ],
        answer: 0,
        explanation: "A worksheet is one working page inside a spreadsheet file."
      },
      {
        question: "Which shortcut is commonly used to save a spreadsheet?",
        options: ["Ctrl + P", "Ctrl + C", "Ctrl + S", "Ctrl + X"],
        answer: 2,
        explanation: "Ctrl + S saves your current work."
      }
    ],
    2: [
  {
    question: "What happens when you drag the fill handle in Excel?",
    options: ["Deletes cells", "Copies or extends data", "Closes Excel", "Creates a new file"],
    answer: 1,
    explanation: "The fill handle copies values or extends a sequence."
  },
  {
    question: "Which formula adds values from A1 to A5?",
    options: ["=ADD(A1:A5)", "=SUM(A1:A5)", "=TOTAL(A1:A5)", "=PLUS(A1:A5)"],
    answer: 1,
    explanation: "SUM adds all values in the specified range."
  },
  {
    question: "What does =AVERAGE(B1:B5) calculate?",
    options: ["Total", "Highest value", "Arithmetic mean", "Lowest value"],
    answer: 2,
    explanation: "AVERAGE calculates the arithmetic mean."
  },
  {
    question: "Which function finds the largest number?",
    options: ["MIN", "MAX", "COUNT", "SUM"],
    answer: 1,
    explanation: "MAX returns the largest value in a range."
  },
  {
    question: "Which function finds the smallest number?",
    options: ["MIN", "MAX", "AVERAGE", "SUM"],
    answer: 0,
    explanation: "MIN returns the smallest value."
  },
  {
    question: "What does the COUNT function do?",
    options: ["Adds text", "Counts numeric cells", "Changes font size", "Sorts data"],
    answer: 1,
    explanation: "COUNT counts cells containing numbers."
  },
  {
    question: "What is a cell range?",
    options: ["A group of selected cells", "A single formula", "A chart title", "A worksheet name"],
    answer: 0,
    explanation: "A range is a group of cells, such as A1:A5."
  },
  {
    question: "Which formula calculates the total of C2 and D2?",
    options: ["=C2+D2", "=C2:D2", "=TOTAL(C2,D2)", "=ADD C2 D2"],
    answer: 0,
    explanation: "The plus operator adds two cell values."
  },
  {
    question: "What is the purpose of cell formatting?",
    options: ["Delete information", "Improve the appearance of data", "Close a workbook", "Remove formulas"],
    answer: 1,
    explanation: "Formatting makes spreadsheet data easier to read."
  },
  {
    question: "You want to display a value as currency. What should you use?",
    options: ["Date format", "Currency format", "Text alignment", "Sort option"],
    answer: 1,
    explanation: "Currency formatting displays values with a currency symbol."
  }
],
3: [
  {
    question: "What does sorting data mean?",
    options: ["Deleting data", "Arranging data in a particular order", "Changing formulas", "Hiding a worksheet"],
    answer: 1,
    explanation: "Sorting arranges data, for example from smallest to largest."
  },
  {
    question: "What does filtering data do?",
    options: ["Shows only records matching selected conditions", "Deletes unwanted rows permanently", "Adds all numbers", "Changes cell colours"],
    answer: 0,
    explanation: "Filtering displays only the records that meet your conditions."
  },
  {
    question: "A student wants to see marks from highest to lowest. Which option should they use?",
    options: ["Filter A to Z", "Sort Largest to Smallest", "Merge Cells", "Wrap Text"],
    answer: 1,
    explanation: "Largest to Smallest sorts numerical values in descending order."
  },
  {
    question: "Which chart is suitable for comparing marks of different students?",
    options: ["Bar chart", "Pie chart only", "Scatter chart only", "No chart"],
    answer: 0,
    explanation: "A bar chart makes comparisons between categories easy."
  },
  {
    question: "What does Freeze Panes help you do?",
    options: ["Lock the entire workbook", "Keep selected rows or columns visible while scrolling", "Prevent saving", "Delete columns"],
    answer: 1,
    explanation: "Freeze Panes keeps important headings visible when scrolling."
  },
  {
    question: "What does the IF function do?",
    options: ["Checks a condition and returns a result", "Adds every cell", "Sorts a table", "Creates a new worksheet"],
    answer: 0,
    explanation: "IF returns one result when a condition is true and another when false."
  },
  {
    question: "Which formula checks whether A1 is greater than 50?",
    options: ["=IF(A1>50,\"Yes\",\"No\")", "=SUM(A1>50)", "=MAX(A1,50)", "=COUNT(A1)"],
    answer: 0,
    explanation: "The IF function evaluates the condition A1>50."
  },
  {
    question: "What is conditional formatting?",
    options: ["Formatting based on cell values or conditions", "Deleting duplicate sheets", "Changing passwords", "Adding a new workbook"],
    answer: 0,
    explanation: "Conditional formatting changes cell appearance when specified conditions are met."
  },
  {
    question: "Why are duplicate records sometimes removed?",
    options: ["To increase file size", "To avoid repeated information", "To remove formulas", "To hide charts"],
    answer: 1,
    explanation: "Removing duplicates helps maintain clean and accurate data."
  },
  {
    question: "A teacher wants to display only students who scored above 80. What should they use?",
    options: ["Filtering", "Merging", "Freeze Panes", "Page Layout"],
    answer: 0,
    explanation: "A number filter can display only marks greater than 80."
  }
],
4: [
  {
    question: "What does the VLOOKUP function do?",
    options: [
      "Searches for a value in the first column of a table and returns related information",
      "Counts blank cells",
      "Creates a chart",
      "Deletes duplicate rows"
    ],
    answer: 0,
    explanation: "VLOOKUP searches vertically in the first column and returns a value from another column."
  },
  {
    question: "Which symbol is used to keep a cell reference fixed in Excel?",
    options: ["#", "$", "&", "@"],
    answer: 1,
    explanation: "The dollar sign creates an absolute cell reference, such as $A$1."
  },
  {
    question: "What is the difference between relative and absolute references?",
    options: [
      "Relative references change when copied; absolute references remain fixed",
      "Both always remain fixed",
      "Absolute references change when copied",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Relative references adjust when copied, while absolute references stay fixed."
  },
  {
    question: "What does COUNTIF calculate?",
    options: [
      "The sum of all values",
      "The number of cells meeting a condition",
      "The largest value",
      "The average of cells"
    ],
    answer: 1,
    explanation: "COUNTIF counts cells that satisfy a specified condition."
  },
  {
    question: "Which function adds values that meet a condition?",
    options: ["COUNT", "SUMIF", "MAX", "MIN"],
    answer: 1,
    explanation: "SUMIF adds values that meet a specified condition."
  },
  {
    question: "What is a pivot table mainly used for?",
    options: [
      "Typing long paragraphs",
      "Summarizing and analyzing large datasets",
      "Drawing pictures",
      "Changing computer settings"
    ],
    answer: 1,
    explanation: "Pivot tables help summarize and analyze data quickly."
  },
  {
    question: "What does data validation help with?",
    options: [
      "Restricting the type of data entered into a cell",
      "Deleting a workbook",
      "Changing screen brightness",
      "Creating passwords"
    ],
    answer: 0,
    explanation: "Data validation controls what users can enter into selected cells."
  },
  {
    question: "A teacher wants a dropdown list of grades in a cell. Which feature is useful?",
    options: ["Data Validation", "Freeze Panes", "Sort", "Page Break"],
    answer: 0,
    explanation: "Data Validation can create dropdown lists using predefined options."
  },
  {
    question: "What is the purpose of protecting a worksheet?",
    options: [
      "To prevent unauthorized changes to protected cells",
      "To increase internet speed",
      "To automatically calculate averages",
      "To create new charts"
    ],
    answer: 0,
    explanation: "Worksheet protection helps prevent unwanted edits."
  },
  {
    question: "Which function combines text from multiple cells?",
    options: ["SUM", "CONCAT", "MAX", "COUNT"],
    answer: 1,
    explanation: "CONCAT joins text from multiple cells into one text string."
  }
],
5: [
  {
    question: "A teacher wants to calculate the average marks only for students who scored above 70. Which function is suitable?",
    options: ["SUM", "AVERAGEIF", "COUNT", "MAX"],
    answer: 1,
    explanation: "AVERAGEIF calculates the average of values that satisfy a specified condition."
  },
  {
    question: "Which function can handle multiple conditions while calculating a sum?",
    options: ["SUM", "SUMIF", "SUMIFS", "COUNT"],
    answer: 2,
    explanation: "SUMIFS adds values that meet multiple specified conditions."
  },
  {
    question: "What does the IFERROR function do?",
    options: [
      "Deletes incorrect formulas",
      "Returns an alternative result when a formula produces an error",
      "Counts errors",
      "Highlights every cell"
    ],
    answer: 1,
    explanation: "IFERROR lets you display a meaningful alternative when a formula returns an error."
  },
  {
    question: "Which function returns the position of a value within a range?",
    options: ["MATCH", "SUM", "ROUND", "LEFT"],
    answer: 0,
    explanation: "MATCH returns the relative position of a value in a range."
  },
  {
    question: "What is the purpose of the INDEX function?",
    options: [
      "Returns a value from a specified position in a range",
      "Counts all worksheets",
      "Creates a new chart",
      "Removes formatting"
    ],
    answer: 0,
    explanation: "INDEX returns the value at a specified row and column position."
  },
  {
    question: "Why should a dataset have clear column headings?",
    options: [
      "To make the file larger",
      "To identify what each column contains",
      "To prevent saving",
      "To hide information"
    ],
    answer: 1,
    explanation: "Clear headings make data easier to understand, filter and analyze."
  },
  {
    question: "A spreadsheet contains thousands of sales records. Which tool is useful for summarizing sales by region?",
    options: ["Pivot Table", "Paint", "Notepad", "Spell Check"],
    answer: 0,
    explanation: "Pivot tables summarize large datasets by categories such as region."
  },
  {
    question: "What is the best practice before sharing a spreadsheet containing student marks?",
    options: [
      "Share it publicly",
      "Check accuracy and restrict access to authorized people",
      "Delete all headings",
      "Remove all formulas"
    ],
    answer: 1,
    explanation: "Checking accuracy and limiting access protects sensitive student information."
  },
  {
    question: "Which chart is generally suitable for showing monthly sales trends?",
    options: ["Line Chart", "Pie Chart", "Doughnut Chart", "Radar Chart"],
    answer: 0,
    explanation: "Line charts are useful for showing changes over time."
  },
  {
    question: "A formula gives an unexpected result. What should you do first?",
    options: [
      "Delete the workbook",
      "Check cell references, formula syntax and input values",
      "Restart the computer",
      "Change every cell format"
    ],
    answer: 1,
    explanation: "Checking references, syntax and input data is the best first step when debugging a formula."
  }
]
  },
  presentation: {
  1: [
    { question: "Which software is commonly used to create presentations?", options: ["MS Excel", "MS PowerPoint", "MS Access", "Notepad"], answer: 1, explanation: "PowerPoint is designed to create slide-based presentations." },
    { question: "What is a slide?", options: ["A single page of a presentation", "A spreadsheet cell", "A computer folder", "A web browser"], answer: 0, explanation: "A slide is one page or screen in a presentation." },
    { question: "Which key starts a slideshow from the beginning in PowerPoint?", options: ["F1", "F2", "F5", "F12"], answer: 2, explanation: "F5 starts the slideshow from the first slide." },
    { question: "What should a good presentation title be?", options: ["Very long", "Clear and meaningful", "Unrelated", "Written in tiny text"], answer: 1, explanation: "A clear title tells the audience what the presentation is about." },
    { question: "Which element makes a presentation more visual?", options: ["Images", "Long paragraphs", "Unnecessary text", "Blank slides"], answer: 0, explanation: "Relevant images help explain ideas visually." },
    { question: "What is a presentation theme?", options: ["A design with matching colours and fonts", "A computer password", "A slide number", "A file extension"], answer: 0, explanation: "A theme provides a consistent visual design." },
    { question: "Which view displays slides as small thumbnails?", options: ["Reading view", "Slide Sorter view", "Notes view", "Outline view"], answer: 1, explanation: "Slide Sorter displays slides as thumbnails for easy arrangement." },
    { question: "Which file extension is commonly used for PowerPoint presentations?", options: [".xlsx", ".docx", ".pptx", ".jpg"], answer: 2, explanation: ".pptx is the standard modern PowerPoint file extension." },
    { question: "Why should slides avoid too much text?", options: ["It makes slides harder to read", "It improves every slide", "It increases internet speed", "It protects the file"], answer: 0, explanation: "Too much text makes slides crowded and difficult to follow." },
    { question: "What is the best way to end a presentation?", options: ["Stop suddenly", "Show a conclusion or thank-you slide", "Delete the slides", "Repeat the title only"], answer: 1, explanation: "A conclusion summarises the main message and gives the presentation a clear ending." }
  ],
  2: [
    { question: "Which font size is generally easier to read on a presentation slide?", options: ["8 pt", "10 pt", "Very tiny text", "A sufficiently large readable size"], answer: 3, explanation: "Large readable text helps people view slides from a distance." },
    { question: "What is the purpose of slide layouts?", options: ["Arrange content in predefined structures", "Delete presentations", "Change passwords", "Compress videos"], answer: 0, explanation: "Layouts organise titles, text and other content." },
    { question: "Which colour combination usually provides good readability?", options: ["Yellow text on white", "Dark text on a light background", "Light grey on white", "Red on orange"], answer: 1, explanation: "Strong contrast makes text easier to read." },
    { question: "What does the Duplicate Slide option do?", options: ["Deletes a slide", "Creates a copy of a slide", "Starts a slideshow", "Changes the theme"], answer: 1, explanation: "Duplicate Slide creates another copy of the selected slide." },
    { question: "What is a transition in a presentation?", options: ["An effect between slides", "A spelling correction", "A file backup", "A slide title"], answer: 0, explanation: "Transitions control how one slide changes to another." },
    { question: "What is an animation used for?", options: ["Adding movement to slide objects", "Changing the file name", "Creating folders", "Checking internet speed"], answer: 0, explanation: "Animations control how text and objects appear or move." },
    { question: "Where should you place a chart?", options: ["Anywhere, even if unrelated", "On a slide where it supports the message", "Over the title", "Outside the presentation"], answer: 1, explanation: "Charts should support the information being explained." },
    { question: "Why should the same fonts and colours be used consistently?", options: ["To create a uniform appearance", "To make slides confusing", "To increase file size", "To hide information"], answer: 0, explanation: "Consistency makes a presentation look organised and professional." },
    { question: "Which option helps you add an image to a slide?", options: ["Insert Picture", "Delete Slide", "Spell Check", "Slide Show"], answer: 0, explanation: "Insert Picture lets you add an image to a slide." },
    { question: "What should you check before presenting?", options: ["Spelling and slide order", "Only the file name", "Only the background", "Nothing"], answer: 0, explanation: "Checking spelling and slide order helps avoid mistakes." }
  ],
  3: [
    { question: "A slide contains many unrelated points. What should you do?", options: ["Add even more text", "Organise points into smaller sections", "Make all text smaller", "Remove the title"], answer: 1, explanation: "Grouping related ideas makes information easier to understand." },
    { question: "Which chart is suitable for comparing values across categories?", options: ["Bar chart", "Pie chart only", "Map", "Text box"], answer: 0, explanation: "Bar charts make category comparisons easy." },
    { question: "When is a pie chart most useful?", options: ["Showing parts of a whole", "Showing a long paragraph", "Showing a process timeline", "Writing a conclusion"], answer: 0, explanation: "Pie charts show how categories contribute to a whole." },
    { question: "What is the purpose of speaker notes?", options: ["Store reminders for the presenter", "Change slide colours", "Delete images", "Lock the keyboard"], answer: 0, explanation: "Speaker notes help the presenter remember important points." },
    { question: "You need to explain a process in steps. What could help?", options: ["A flowchart", "A random photograph", "A blank slide", "A long unstructured paragraph"], answer: 0, explanation: "A flowchart visually represents steps and decisions." },
    { question: "What is visual hierarchy?", options: ["Arranging content by importance", "Using only one colour", "Making every object identical", "Removing headings"], answer: 0, explanation: "Visual hierarchy guides attention towards important information." },
    { question: "Why should images have good resolution?", options: ["To look clear rather than blurry", "To make text disappear", "To remove slide numbers", "To change the theme"], answer: 0, explanation: "High-quality images remain clear when displayed." },
    { question: "What should you do if an image stretches unnaturally?", options: ["Maintain its aspect ratio", "Stretch it further", "Cover it with text", "Delete the title"], answer: 0, explanation: "Maintaining the aspect ratio prevents image distortion." },
    { question: "Which slide design is best for presenting statistics?", options: ["A clear chart with a meaningful title", "A full page of tiny text", "Many unrelated animations", "A blank slide"], answer: 0, explanation: "A clear chart helps the audience understand numerical information." },
    { question: "What is the purpose of a call-to-action slide?", options: ["Encourage a specific next step", "Display random facts", "Hide the conclusion", "Change the presentation theme"], answer: 0, explanation: "A call to action tells the audience what to do next." }
  ],
  4: [
    { question: "You are presenting to younger students. What is the best approach?", options: ["Use simple language and relevant examples", "Use complex technical terms everywhere", "Use only long paragraphs", "Avoid illustrations"], answer: 0, explanation: "Simple language and familiar examples make content accessible." },
    { question: "What should you do when using information from a website?", options: ["Give proper credit to the source", "Claim it as your own", "Remove the author's name", "Change the website title"], answer: 0, explanation: "Crediting sources recognises the original creator." },
    { question: "Which is an example of copyright-aware behaviour?", options: ["Using any image without permission", "Using licensed or permitted images", "Removing watermarks", "Selling someone else's work as yours"], answer: 1, explanation: "Use images that you have permission or a valid licence to use." },
    { question: "Your chart has too many categories. What is a good improvement?", options: ["Simplify or group the data", "Shrink every label", "Add unrelated categories", "Remove all labels"], answer: 0, explanation: "Simplifying data makes comparisons easier." },
    { question: "What is the purpose of a master slide?", options: ["Apply consistent formatting across slides", "Create a new email account", "Record audio only", "Delete all images"], answer: 0, explanation: "A slide master controls shared design elements." },
    { question: "How can you make a presentation more accessible?", options: ["Use readable contrast and descriptive text for images", "Use tiny fonts", "Communicate only through colour", "Put all content in images"], answer: 0, explanation: "Readable text, contrast and image descriptions support more viewers." },
    { question: "What should you do if a video does not play during rehearsal?", options: ["Check the file and test playback again", "Ignore the problem", "Delete every slide", "Change the computer password"], answer: 0, explanation: "Testing media beforehand helps prevent presentation interruptions." },
    { question: "Which practice improves teamwork on a shared presentation?", options: ["Agree on a common design and divide tasks", "Let everyone use unrelated designs", "Avoid communication", "Overwrite others' work"], answer: 0, explanation: "Shared guidelines and clear responsibilities improve collaboration." },
    { question: "What should you do if the audience cannot read a chart label?", options: ["Increase its size and improve contrast", "Make it smaller", "Remove the chart title", "Add more labels"], answer: 0, explanation: "Readable labels help the audience interpret the chart." },
    { question: "Why is rehearsal important?", options: ["It improves timing and confidence", "It automatically creates slides", "It changes the file format", "It removes all mistakes permanently"], answer: 0, explanation: "Rehearsal helps you practise delivery and identify problems." }
  ],
  5: [
    { question: "You have five minutes to present a project. What should you prioritise?", options: ["Key findings and the main message", "Every small detail", "Unrelated background stories", "Reading every word on every slide"], answer: 0, explanation: "A short presentation should focus on its most important messages." },
    { question: "A slide contains a misleading chart with a truncated axis. What should you do?", options: ["Use an appropriate scale and label the axis clearly", "Keep it because it looks dramatic", "Remove the data source", "Hide the axis"], answer: 0, explanation: "Accurate scales and labels help prevent misleading interpretations." },
    { question: "What is the best way to handle a question you cannot answer?", options: ["Admit it honestly and offer to check", "Invent an answer", "Ignore the person", "Change the subject immediately"], answer: 0, explanation: "Honesty maintains credibility and trust." },
    { question: "Which is the strongest opening for a presentation?", options: ["A relevant question or interesting fact", "An unrelated story", "A long list of file names", "An apology for every slide"], answer: 0, explanation: "A relevant opening captures attention and introduces the topic." },
    { question: "How should you evaluate whether a presentation was successful?", options: ["Check whether the audience understood the key message", "Count only the animations", "Measure only the number of slides", "Check only the background colour"], answer: 0, explanation: "Audience understanding is a meaningful measure of communication." },
    { question: "You are sharing a presentation online. What should you check first?", options: ["Remove private information and check sharing permissions", "Share edit access with everyone", "Include personal passwords", "Disable all security"], answer: 0, explanation: "Privacy and sharing permissions protect your information." },
    { question: "What makes a conclusion effective?", options: ["Summarising key points and reinforcing the message", "Introducing many unrelated topics", "Repeating every slide word for word", "Ending without a clear message"], answer: 0, explanation: "A strong conclusion reinforces the main ideas." },
    { question: "Your audience looks confused during your presentation. What should you do?", options: ["Pause and explain the idea more simply", "Speak faster", "Skip every remaining slide", "Add more technical words"], answer: 0, explanation: "Adjusting your explanation helps the audience follow along." },
    { question: "Which is an example of ethical use of AI in presentation creation?", options: ["Verify AI-generated facts and disclose its use when required", "Present invented facts as verified", "Copy private data into any AI tool", "Use generated content without checking it"], answer: 0, explanation: "AI output should be checked for accuracy and used responsibly." },
    { question: "What is the most important quality of a professional presentation?", options: ["Clear communication supported by suitable design", "Maximum animations on every slide", "The largest possible number of slides", "Using many different fonts"], answer: 0, explanation: "Good presentations combine clear content with appropriate visual design." }
  ]
},
safety: {
  1: [
    { question: "What is cybersecurity?", options: ["Protecting digital devices and information", "Designing posters", "Playing online games", "Creating spreadsheets"], answer: 0, explanation: "Cybersecurity protects devices, networks and data from digital threats." },
    { question: "Which password is strongest?", options: ["123456", "password", "Om@2026#Safe9", "abcdef"], answer: 2, explanation: "A long password with mixed characters is harder to guess." },
    { question: "What is phishing?", options: ["A type of online fraud", "A computer game", "A file format", "A search engine"], answer: 0, explanation: "Phishing tricks people into revealing passwords or personal information." },
    { question: "What should you do with an unknown email attachment?", options: ["Open it immediately", "Forward it to everyone", "Avoid opening it until verified", "Download it repeatedly"], answer: 2, explanation: "Unknown attachments may contain harmful software." },
    { question: "Why should you never share your OTP?", options: ["It protects account access", "It improves internet speed", "It increases storage", "It changes your username"], answer: 0, explanation: "An OTP is a temporary security code that must remain private." },
    { question: "What does antivirus software help detect?", options: ["Malware", "Keyboard spelling", "Screen brightness", "Battery level"], answer: 0, explanation: "Antivirus software helps identify and remove malicious programs." },
    { question: "What is personal information?", options: ["Your home address", "A public weather report", "A general news headline", "A school subject name"], answer: 0, explanation: "Your address can identify or locate you and should be protected." },
    { question: "What should you do before using a public Wi-Fi network?", options: ["Share passwords openly", "Avoid sensitive transactions on unsecured networks", "Disable every security feature", "Download unknown files"], answer: 1, explanation: "Unsecured public networks can expose sensitive information." },
    { question: "Why are software updates important?", options: ["They can fix security weaknesses", "They always delete files", "They reveal passwords", "They disable the internet"], answer: 0, explanation: "Updates often include fixes for known security vulnerabilities." },
    { question: "What should you do if a stranger asks for your password online?", options: ["Share it", "Send it privately", "Refuse and report suspicious behaviour", "Post it publicly"], answer: 2, explanation: "Never share your password with strangers." }
  ],
  2: [
    { question: "What is two-factor authentication (2FA)?", options: ["Using two usernames", "An extra verification step during login", "Changing your wallpaper twice", "Creating two email accounts"], answer: 1, explanation: "2FA requires an additional proof of identity beyond a password." },
    { question: "Which website connection is generally more secure?", options: ["HTTP", "HTTPS", "FTP", "Unknown shortened link"], answer: 1, explanation: "HTTPS encrypts data exchanged between your browser and the website." },
    { question: "What is malware?", options: ["Malicious software", "A computer monitor", "A safe backup", "A search feature"], answer: 0, explanation: "Malware is software designed to harm, disrupt or gain unauthorised access." },
    { question: "What is ransomware?", options: ["Software that encrypts files and demands payment", "A photo editor", "A password manager", "A video player"], answer: 0, explanation: "Ransomware locks or encrypts data and demands a ransom." },
    { question: "Why should you use different passwords for different accounts?", options: ["One stolen password cannot automatically unlock every account", "It makes passwords shorter", "It removes the need for 2FA", "It increases screen resolution"], answer: 0, explanation: "Unique passwords limit the damage if one account is compromised." },
    { question: "What is a password manager used for?", options: ["Securely storing passwords", "Increasing download speed", "Editing photographs", "Creating presentations"], answer: 0, explanation: "Password managers help generate and store strong passwords." },
    { question: "What does a firewall do?", options: ["Monitors and controls network traffic", "Cleans the computer screen", "Charges a laptop", "Creates documents"], answer: 0, explanation: "A firewall filters network traffic according to security rules." },
    { question: "You receive a message claiming you won a prize but must pay first. What should you do?", options: ["Pay immediately", "Share your bank details", "Treat it as suspicious and verify independently", "Forward it to friends"], answer: 2, explanation: "Unexpected prize-payment requests are a common scam warning sign." },
    { question: "What is social engineering?", options: ["Manipulating people into revealing information", "Building social media websites", "Designing computer hardware", "Writing programming code"], answer: 0, explanation: "Social engineering exploits human behaviour to obtain access or information." },
    { question: "What should you do when leaving a shared computer?", options: ["Leave your account open", "Log out of your accounts", "Save your password in the browser", "Share your session"], answer: 1, explanation: "Logging out prevents the next user from accessing your account." }
  ],
  3: [
    { question: "A message says your bank account will be blocked unless you click a link immediately. What is the safest action?", options: ["Click quickly", "Reply with your password", "Contact the bank through its official channel", "Forward the message"], answer: 2, explanation: "Verify urgent account warnings using the bank's official website or phone number." },
    { question: "What is identity theft?", options: ["Using another person's personal information without permission", "Changing your profile picture", "Creating a new username", "Deleting an old account"], answer: 0, explanation: "Identity theft involves misusing someone's personal information." },
    { question: "Why should you check app permissions?", options: ["To understand what information an app can access", "To make apps larger", "To increase screen brightness", "To remove the operating system"], answer: 0, explanation: "Permissions control access to features such as the camera, microphone and location." },
    { question: "What is a data breach?", options: ["Unauthorised exposure or access to information", "A normal software update", "A computer restart", "A new file download"], answer: 0, explanation: "A data breach exposes information to people who should not access it." },
    { question: "What is the safest response to a suspicious QR code?", options: ["Scan it without checking", "Verify its source before scanning", "Enter your password immediately", "Share it publicly"], answer: 1, explanation: "Malicious QR codes can direct users to fraudulent websites." },
    { question: "Why are backups important?", options: ["They help recover data after loss or damage", "They prevent every cyberattack", "They remove all viruses automatically", "They make passwords public"], answer: 0, explanation: "Backups provide copies of important data that can be restored." },
    { question: "What is a brute-force password attack?", options: ["Trying many possible password combinations", "Stealing a laptop physically", "Deleting a website", "Sending a normal email"], answer: 0, explanation: "A brute-force attack repeatedly tries possible passwords until one works." },
    { question: "Which is a safe practice on social media?", options: ["Posting your home address publicly", "Accepting every unknown request", "Limiting personal information shared publicly", "Sharing your OTP in messages"], answer: 2, explanation: "Sharing less personal information reduces privacy and safety risks." },
    { question: "What does encryption do?", options: ["Transforms information into a protected form", "Deletes all files", "Makes every website public", "Increases battery capacity"], answer: 0, explanation: "Encryption makes information unreadable without the appropriate key." },
    { question: "You find an unknown USB drive in school. What should you do?", options: ["Plug it into your laptop", "Give it to a teacher or IT administrator", "Copy every file", "Take it home and open it"], answer: 1, explanation: "Unknown USB devices may contain malware and should be handled by responsible staff." }
  ],
  4: [
    { question: "What is the main purpose of a VPN?", options: ["Create an encrypted connection over a network", "Increase laptop memory", "Remove every online threat", "Replace antivirus software"], answer: 0, explanation: "A VPN can protect network traffic through an encrypted connection." },
    { question: "What is a zero-day vulnerability?", options: ["A software weakness exploited before a fix is available", "A password with zero characters", "A computer with no battery", "A website with no images"], answer: 0, explanation: "Zero-day vulnerabilities are flaws for which a patch may not yet be available." },
    { question: "Why is public oversharing risky?", options: ["It can help strangers collect personal details", "It always improves privacy", "It prevents phishing", "It encrypts your account"], answer: 0, explanation: "Small details shared publicly can be combined to target someone." },
    { question: "What should you do if your account is hacked?", options: ["Ignore it", "Change credentials using a trusted device and report it", "Share the hacked password", "Delete every backup"], answer: 1, explanation: "Secure the account quickly, enable 2FA and report the compromise." },
    { question: "Which is an example of secure file sharing?", options: ["Sharing a public link with no restrictions", "Giving access only to intended people", "Posting private files on social media", "Sending passwords in public comments"], answer: 1, explanation: "Restricted access helps ensure only intended people can view files." },
    { question: "What is the principle of least privilege?", options: ["Give users only the access they need", "Give everyone administrator access", "Never use passwords", "Allow all applications to access everything"], answer: 0, explanation: "Least privilege limits unnecessary access and reduces potential damage." },
    { question: "What is a digital footprint?", options: ["The trail of information created by online activity", "A computer's physical size", "A type of keyboard", "A network cable"], answer: 0, explanation: "Online posts, searches and interactions can contribute to a digital footprint." },
    { question: "Why should you verify a website's domain before entering login details?", options: ["Fake websites may imitate trusted services", "Domains control battery life", "It changes your password automatically", "It makes downloads free"], answer: 0, explanation: "Lookalike domains can be used to steal login credentials." },
    { question: "What should you do if someone cyberbullies you?", options: ["Respond with threats", "Save evidence, block and report the person, and seek help", "Share their private details", "Keep it secret from every trusted adult"], answer: 1, explanation: "Preserving evidence and seeking trusted support are safer responses." },
    { question: "What is responsible disclosure?", options: ["Reporting a security weakness privately to the responsible organisation", "Publishing stolen passwords", "Selling private information", "Sharing malware online"], answer: 0, explanation: "Responsible disclosure gives the organisation a chance to fix a vulnerability." }
  ],
  5: [
    { question: "You receive an email from a familiar-looking school address asking for student passwords. What should you do?", options: ["Send the passwords", "Verify the request with school staff through another trusted channel", "Reply with your own password", "Forward it to all students"], answer: 1, explanation: "A familiar-looking address can be spoofed or compromised; verify sensitive requests independently." },
    { question: "A friend wants to install a cracked paid application. What is the safest advice?", options: ["Download it from any website", "Use official or trusted sources and properly licensed software", "Disable antivirus first", "Share administrator passwords"], answer: 1, explanation: "Cracked software can contain malware and may violate licensing terms." },
    { question: "What is multi-factor authentication?", options: ["Using two or more different types of verification", "Using the same password twice", "Creating multiple usernames", "Logging in from multiple browsers"], answer: 0, explanation: "MFA combines different verification factors, such as a password and a security key." },
    { question: "Why should an organisation maintain a cybersecurity incident response plan?", options: ["To respond consistently and reduce damage", "To avoid all software updates", "To publish private data", "To remove user accounts randomly"], answer: 0, explanation: "A response plan defines actions and responsibilities during security incidents." },
    { question: "Which action best protects important school files against ransomware?", options: ["Keep tested backups separate from everyday access", "Use one shared password", "Disable all updates", "Open every attachment"], answer: 0, explanation: "Separate, tested backups can help restore files after an attack." },
    { question: "An AI chatbot asks you to upload your identity documents for a simple homework question. What should you do?", options: ["Upload them immediately", "Avoid sharing unnecessary sensitive information", "Post them publicly", "Share your OTP too"], answer: 1, explanation: "Only share sensitive information when genuinely necessary with a trusted service." },
    { question: "What is the safest way to dispose of an old device containing personal information?", options: ["Sell it without preparation", "Securely erase data and follow proper disposal procedures", "Leave accounts signed in", "Share its storage publicly"], answer: 1, explanation: "Remove personal data and accounts before recycling or transferring a device." },
    { question: "Why should security incidents be reported promptly?", options: ["Early action can limit further damage", "It automatically deletes every threat", "It makes passwords unnecessary", "It hides the incident"], answer: 0, explanation: "Prompt reporting helps responsible people investigate and contain incidents." },
    { question: "Which statement about online information is most accurate?", options: ["Everything online is trustworthy", "A professional-looking website is always genuine", "Information should be checked against reliable sources", "Popular posts are always correct"], answer: 2, explanation: "Verify important information instead of trusting appearance or popularity." },
    { question: "What is the best overall approach to digital safety?", options: ["Use strong authentication, updates, careful sharing and verification", "Depend only on antivirus", "Reuse one password everywhere", "Trust every message"], answer: 0, explanation: "Digital safety requires multiple habits rather than relying on one tool." }
  ]
},
coding: {
  1: [
    { question: "What is Java?", options: ["A programming language", "A web browser", "An operating system", "A spreadsheet"], answer: 0, explanation: "Java is a widely used programming language." },
    { question: "Which method is the entry point of a basic Java application?", options: ["start()", "main()", "run()", "print()"], answer: 1, explanation: "Java applications commonly begin execution from the main method." },
    { question: "Which keyword is used to declare an integer variable in Java?", options: ["number", "integer", "int", "value"], answer: 2, explanation: "The int keyword declares an integer variable." },
    { question: "Which symbol ends a Java statement?", options: [".", ":", ";", ","], answer: 2, explanation: "A semicolon terminates most Java statements." },
    { question: "Which command displays text in Java?", options: ["System.out.println()", "Console.show()", "print.text()", "display()"], answer: 0, explanation: "System.out.println() prints text and moves to a new line." },
    { question: "Which data type stores true or false?", options: ["int", "String", "boolean", "double"], answer: 2, explanation: "The boolean type stores either true or false." },
    { question: "Which operator adds two numbers?", options: ["+", "*", "/", "%"], answer: 0, explanation: "The plus operator performs addition." },
    { question: "What is a variable?", options: ["A named storage location for data", "A type of keyboard", "A computer virus", "A web page"], answer: 0, explanation: "A variable stores a value that a program can use." },
    { question: "Which data type stores text in Java?", options: ["int", "String", "boolean", "char only"], answer: 1, explanation: "String represents a sequence of characters." },
    { question: "What is the output of System.out.println(2 + 3);?", options: ["23", "5", "2 + 3", "6"], answer: 1, explanation: "The plus operator adds the two integer values, producing 5." }
  ],
  2: [
    { question: "Which statement is used to make a decision in Java?", options: ["if", "repeat", "print", "import"], answer: 0, explanation: "An if statement executes code when its condition is true." },
    { question: "Which operator checks whether two values are equal?", options: ["=", "==", "!=", ">"], answer: 1, explanation: "The == operator compares two values for equality." },
    { question: "What is the output of int x = 10; System.out.println(x);?", options: ["0", "10", "x", "Error"], answer: 1, explanation: "The variable x contains 10, so 10 is printed." },
    { question: "Which loop executes a block while a condition is true?", options: ["while", "if", "switch", "class"], answer: 0, explanation: "A while loop repeats as long as its condition remains true." },
    { question: "Which operator represents logical AND in Java?", options: ["||", "!", "&&", "&lt;"], answer: 2, explanation: "The && operator performs logical AND." },
    { question: "What does the % operator return?", options: ["Quotient", "Remainder", "Product", "Power"], answer: 1, explanation: "The modulus operator returns the remainder after division." },
    { question: "Which keyword exits a loop immediately?", options: ["skip", "stop", "break", "exitloop"], answer: 2, explanation: "The break statement terminates the nearest enclosing loop." },
    { question: "What is the output of System.out.println(5 > 3);?", options: ["5", "3", "true", "false"], answer: 2, explanation: "Five is greater than three, so the condition evaluates to true." },
    { question: "Which loop is useful when the number of repetitions is known?", options: ["for", "while only", "if", "switch"], answer: 0, explanation: "A for loop is commonly used when repetitions can be counted." },
    { question: "What is an infinite loop?", options: ["A loop that never executes", "A loop that does not end normally", "A loop that runs once", "A loop without variables"], answer: 1, explanation: "An infinite loop continues because its stopping condition is never reached." }
  ],
  3: [
    { question: "What is an array in Java?", options: ["A collection of values of the same type", "A single character", "A loop condition", "A Java keyword for printing"], answer: 0, explanation: "An array stores multiple values of the same declared type." },
    { question: "What is the index of the first element in a Java array?", options: ["1", "-1", "0", "2"], answer: 2, explanation: "Java arrays use zero-based indexing." },
    { question: "What is the output of int[] a = {4, 7, 9}; System.out.println(a[1]);?", options: ["4", "7", "9", "1"], answer: 1, explanation: "Index 1 refers to the second element, which is 7." },
    { question: "What is a method in Java?", options: ["A reusable block of code", "A computer part", "A file extension", "A data cable"], answer: 0, explanation: "A method groups instructions that can be called when needed." },
    { question: "Which keyword returns a value from a method?", options: ["send", "return", "break", "value"], answer: 1, explanation: "The return statement sends a result back to the caller." },
    { question: "What is a parameter?", options: ["An input accepted by a method", "A printed result only", "A loop ending symbol", "A class file"], answer: 0, explanation: "Parameters allow methods to receive input values." },
    { question: "Which expression gives the length of an array named marks?", options: ["marks.size()", "marks.length", "length(marks)", "marks.count"], answer: 1, explanation: "Java arrays have a length field." },
    { question: "What is the output of int x = 3; x++; System.out.println(x);?", options: ["2", "3", "4", "6"], answer: 2, explanation: "The increment operator increases x by one." },
    { question: "What is debugging?", options: ["Finding and fixing errors in code", "Deleting all programs", "Installing a keyboard", "Drawing a chart"], answer: 0, explanation: "Debugging helps identify and correct program errors." },
    { question: "Which exception can occur when accessing an invalid array index?", options: ["ArrayIndexOutOfBoundsException", "IOException", "FileNotFoundException", "ArithmeticException"], answer: 0, explanation: "Accessing an index outside the array bounds can cause this exception." }
  ],
  4: [
    { question: "What is a class in Java?", options: ["A blueprint for creating objects", "A loop that repeats forever", "A type of database", "A print command"], answer: 0, explanation: "A class defines the data and behaviour that its objects can have." },
    { question: "What is an object?", options: ["An instance of a class", "A Java comment", "A programming error", "A loop condition"], answer: 0, explanation: "An object is created from a class." },
    { question: "Which keyword creates an object in Java?", options: ["class", "new", "this", "void"], answer: 1, explanation: "The new keyword creates an object." },
    { question: "What is a constructor?", options: ["A special member used to initialise objects", "A loop for arrays", "A print statement", "A package name"], answer: 0, explanation: "A constructor initialises a newly created object." },
    { question: "What is inheritance?", options: ["A class acquiring features from another class", "Deleting a class", "Repeating a loop", "Converting text to numbers"], answer: 0, explanation: "Inheritance lets a class reuse and extend another class's features." },
    { question: "Which keyword is used to inherit a class in Java?", options: ["implements", "extends", "inherits", "superclass"], answer: 1, explanation: "A Java class uses extends to inherit from another class." },
    { question: "What is encapsulation?", options: ["Combining data and methods while controlling access", "Running every method twice", "Removing all variables", "Making all data public"], answer: 0, explanation: "Encapsulation protects object data through controlled access." },
    { question: "Which access modifier allows access only within the same class?", options: ["public", "protected", "private", "default public"], answer: 2, explanation: "Private members are accessible directly only inside their declaring class." },
    { question: "What is method overloading?", options: ["Methods with the same name but different parameter lists", "Deleting a method", "Using methods only once", "Changing a class name"], answer: 0, explanation: "Overloaded methods share a name but differ in their parameters." },
    { question: "What does the this keyword refer to?", options: ["The current object", "The parent package", "The next loop", "The main method only"], answer: 0, explanation: "The this keyword refers to the current object." }
  ],
  5: [
    { question: "What is polymorphism in object-oriented programming?", options: ["One interface or parent type supporting different implementations", "Storing only one integer", "Repeating a loop", "Deleting unused variables"], answer: 0, explanation: "Polymorphism allows the same operation to behave differently for different object types." },
    { question: "What is method overriding?", options: ["A subclass providing its own version of an inherited method", "Creating two unrelated classes", "Deleting a constructor", "Changing a variable's name"], answer: 0, explanation: "Overriding lets a subclass customise an inherited method." },
    { question: "Which keyword prevents a class from being inherited?", options: ["static", "final", "private", "void"], answer: 1, explanation: "A final class cannot be extended." },
    { question: "What is an interface in Java?", options: ["A contract that classes can implement", "A type of loop", "A database table", "A variable that stores text"], answer: 0, explanation: "An interface defines methods and other requirements that implementing classes provide." },
    { question: "What is exception handling used for?", options: ["Managing runtime errors and exceptional situations", "Increasing monitor brightness", "Creating arrays automatically", "Removing all comments"], answer: 0, explanation: "Exception handling helps a program respond to errors without ending unexpectedly." },
    { question: "Which block is commonly used to handle an exception?", options: ["try-catch", "if-else only", "for-while", "class-object"], answer: 0, explanation: "A catch block handles an exception raised in its associated try block." },
    { question: "What is the purpose of the finally block?", options: ["Run cleanup code after try/catch processing", "Declare a new class", "Start an infinite loop", "Return every array element"], answer: 0, explanation: "The finally block is commonly used for cleanup code." },
    { question: "Which collection stores unique elements without duplicates?", options: ["ArrayList", "HashSet", "LinkedList", "StringBuilder"], answer: 1, explanation: "A HashSet stores unique elements." },
    { question: "What is the time complexity of accessing an array element by index?", options: ["O(1)", "O(n)", "O(n²)", "O(log n)"], answer: 0, explanation: "Array index access takes constant time." },
    { question: "Which approach is best when solving a large programming problem?", options: ["Break it into smaller manageable tasks", "Write all code without planning", "Ignore errors", "Use random variables"], answer: 0, explanation: "Breaking a problem into smaller parts makes it easier to design, test and maintain." }
  ]
},
research: {
  1: [
    { question: "What is a search engine?", options: ["A tool for finding information online", "A photo editing application", "A computer keyboard", "A file storage device"], answer: 0, explanation: "Search engines help users find relevant information on the internet." },
    { question: "Which is an example of a search engine?", options: ["Google", "PowerPoint", "Calculator", "Notepad"], answer: 0, explanation: "Google is a widely used web search engine." },
    { question: "What is a keyword in online searching?", options: ["A word or phrase describing what you want to find", "Your account password", "A computer virus", "A file extension"], answer: 0, explanation: "Keywords help search engines understand your information needs." },
    { question: "Which search query is most useful for finding information about photosynthesis for Class 9?", options: ["Plants", "Photosynthesis", "Class 9 photosynthesis explanation", "Everything about nature and science"], answer: 2, explanation: "A specific query helps narrow results to relevant information." },
    { question: "What is a URL?", options: ["The address of a resource on the internet", "A type of computer virus", "A spreadsheet formula", "A presentation theme"], answer: 0, explanation: "A URL identifies the location of a web resource." },
    { question: "What does a browser do?", options: ["Opens and displays websites", "Repairs computer hardware", "Creates electricity", "Prints documents automatically"], answer: 0, explanation: "A browser lets users access and view web pages." },
    { question: "Which browser is commonly used to access websites?", options: ["Google Chrome", "MS Excel", "Paint", "VLC only"], answer: 0, explanation: "Google Chrome is a web browser." },
    { question: "What is a reliable starting point for school research?", options: ["A random social media comment", "A recognised educational website", "An unknown forwarded message", "An anonymous advertisement"], answer: 1, explanation: "Recognised educational sources are generally better starting points for research." },
    { question: "What does downloading mean?", options: ["Receiving a file from the internet onto your device", "Deleting a website", "Turning off Wi-Fi", "Changing a password"], answer: 0, explanation: "Downloading transfers a file from another system to your device." },
    { question: "Why should you check the date of an online article?", options: ["Information may become outdated", "It changes the website colour", "It reveals the author's password", "It increases download speed"], answer: 0, explanation: "Some information changes over time, so publication dates matter." }
  ],
  2: [
    { question: "What is an effective way to narrow search results?", options: ["Use more specific keywords", "Use unrelated words", "Search without any terms", "Open every result"], answer: 0, explanation: "Specific keywords make results more relevant." },
    { question: "What does putting a phrase in quotation marks usually do in a search engine?", options: ["Searches for the exact phrase", "Deletes the phrase", "Translates the phrase", "Blocks the website"], answer: 0, explanation: "Quotation marks commonly help search for an exact phrase." },
    { question: "What is a primary source?", options: ["An original document or firsthand record", "A summary written by someone else", "An advertisement", "A random search result"], answer: 0, explanation: "Primary sources provide original or firsthand evidence." },
    { question: "Which detail helps evaluate a website's credibility?", options: ["Author qualifications and references", "Number of colourful images", "Background music", "Number of pop-up ads"], answer: 0, explanation: "Author expertise and supporting references help establish credibility." },
    { question: "What is plagiarism?", options: ["Presenting another person's work as your own", "Writing an original explanation", "Giving credit to a source", "Checking facts"], answer: 0, explanation: "Plagiarism means using another person's work or ideas without proper acknowledgement." },
    { question: "What is a citation?", options: ["A reference acknowledging an information source", "A computer shortcut", "A search password", "A type of browser"], answer: 0, explanation: "Citations identify the sources used in your work." },
    { question: "You find two websites giving different statistics. What should you do?", options: ["Choose the more colourful website", "Compare their sources and publication dates", "Use the first result without checking", "Combine the numbers randomly"], answer: 1, explanation: "Checking original sources and dates helps resolve conflicting information." },
    { question: "What is misinformation?", options: ["False or inaccurate information, whether shared intentionally or not", "A verified research paper", "An original photograph", "A search filter"], answer: 0, explanation: "Misinformation is inaccurate information that can spread without deliberate intent to deceive." },
    { question: "What is a filter in online search?", options: ["A way to narrow results by selected criteria", "A method to charge a laptop", "A password generator", "A type of virus"], answer: 0, explanation: "Filters narrow results by factors such as date, type or location." },
    { question: "Why should you compare multiple trustworthy sources?", options: ["To improve accuracy and identify disagreements", "To make research longer without reason", "To avoid reading information", "To copy the same paragraph repeatedly"], answer: 0, explanation: "Cross-checking helps identify errors and strengthen understanding." }
  ],
  3: [
    { question: "What is artificial intelligence (AI)?", options: ["Technology that performs tasks associated with human intelligence", "A type of computer screen", "A physical keyboard", "A file extension"], answer: 0, explanation: "AI systems perform tasks such as recognising patterns, generating text or making predictions." },
    { question: "What is generative AI?", options: ["AI that can create new content", "A tool that only stores files", "A computer cable", "A type of printer"], answer: 0, explanation: "Generative AI can produce content such as text, images, audio or code." },
    { question: "What is a prompt in an AI tool?", options: ["An instruction or input given to the AI", "The computer's power button", "A file download", "A browser password"], answer: 0, explanation: "A prompt tells the AI what task or response is requested." },
    { question: "What is an AI hallucination?", options: ["An AI-generated claim that is incorrect but presented confidently", "A computer screen error", "A slow internet connection", "A verified citation"], answer: 0, explanation: "AI systems can generate convincing but inaccurate information." },
    { question: "Why should AI-generated facts be checked?", options: ["AI can produce inaccurate information", "AI is always correct", "Checking deletes the answer", "AI cannot produce text"], answer: 0, explanation: "AI outputs may contain errors, so important claims need verification." },
    { question: "Which task is a suitable use of AI for a student?", options: ["Getting a difficult topic explained in simpler language", "Sharing a private password", "Submitting unverified answers as research", "Replacing all learning"], answer: 0, explanation: "AI can support learning by explaining concepts and providing examples." },
    { question: "What is machine learning?", options: ["A field where systems learn patterns from data", "A method of repairing keyboards", "A type of internet cable", "A slide transition"], answer: 0, explanation: "Machine learning uses data to train systems to make predictions or decisions." },
    { question: "What is a chatbot?", options: ["A program that interacts with users through conversation", "A computer monitor", "A spreadsheet chart", "A network router"], answer: 0, explanation: "Chatbots respond to user messages in conversational form." },
    { question: "Which information should you avoid entering into an unknown AI tool?", options: ["Your private identity documents and passwords", "A general school topic", "A public science question", "A fictional story idea"], answer: 0, explanation: "Sensitive personal information should not be shared with untrusted tools." },
    { question: "Can AI completely replace a student's own thinking?", options: ["Yes, in every situation", "No, students still need to understand and verify information", "Yes, because AI never makes mistakes", "Only during exams"], answer: 1, explanation: "AI can assist learning, but independent thinking and verification remain essential." }
  ],
  4: [
    { question: "An AI tool gives you a historical date. What should you do before using it in an assignment?", options: ["Verify it with reliable historical sources", "Accept it without checking", "Invent another date", "Remove the source name"], answer: 0, explanation: "Important facts should be checked against trustworthy sources." },
    { question: "What is bias in an AI system?", options: ["A systematic tendency that can produce unfair results", "A faster internet connection", "A type of computer memory", "A presentation effect"], answer: 0, explanation: "Bias can arise from data or design and affect AI outputs." },
    { question: "Why might an AI system give biased results?", options: ["Its training data may contain imbalances or unfair patterns", "It always uses random colours", "It has no computer hardware", "It only reads passwords"], answer: 0, explanation: "Unrepresentative or biased training data can influence system outputs." },
    { question: "What is a deepfake?", options: ["AI-generated or manipulated media that imitates a real person", "A secure backup", "A spreadsheet function", "A browser extension for spelling"], answer: 0, explanation: "Deepfakes use digital techniques to create convincing manipulated images, audio or video." },
    { question: "You see a shocking video online. What is the best first step?", options: ["Share it immediately", "Check its origin and verify it with reliable sources", "Assume it is genuine", "Add your own invented details"], answer: 1, explanation: "Checking the original source and independent reporting can help detect manipulated media." },
    { question: "What is the purpose of an AI citation or source reference?", options: ["To help readers verify supporting information", "To make an answer look longer", "To hide the original source", "To guarantee every claim is correct"], answer: 0, explanation: "References help readers locate and evaluate supporting evidence." },
    { question: "What does responsible AI use involve?", options: ["Checking outputs and respecting privacy and ownership", "Copying every output without review", "Sharing private information", "Using AI to deceive others"], answer: 0, explanation: "Responsible use includes accuracy checks, privacy and ethical behaviour." },
    { question: "Which prompt is likely to produce a more useful explanation?", options: ["Explain", "Tell me everything", "Explain photosynthesis for a Class 9 student with a simple example", "Do something"], answer: 2, explanation: "A specific prompt gives the AI useful context and a clear task." },
    { question: "What is data privacy?", options: ["Protecting personal information and controlling its use", "Making every file public", "Sharing passwords with friends", "Removing all search results"], answer: 0, explanation: "Data privacy concerns how personal information is collected, used and shared." },
    { question: "What should you do if an AI-generated answer includes a suspicious source?", options: ["Check whether the source actually exists and supports the claim", "Cite it without opening it", "Assume the source is genuine", "Invent a website address"], answer: 0, explanation: "AI tools may generate incorrect references, so sources must be checked." }
  ],
  5: [
    { question: "You are researching water conservation for a school project. Which approach is strongest?", options: ["Use one anonymous social media post", "Compare government, scientific and educational sources", "Copy the first search result", "Use an AI answer without checking"], answer: 1, explanation: "Comparing credible and independent sources gives stronger evidence." },
    { question: "An AI chatbot gives you a complete assignment. What is the most responsible approach?", options: ["Submit it unchanged as your own", "Use it as a learning aid, verify it and write your own work", "Remove all references", "Share another student's personal details"], answer: 1, explanation: "AI should support your understanding rather than replace your own work." },
    { question: "What is the difference between correlation and causation?", options: ["Correlation means two things are related; causation means one produces an effect on the other", "They always mean exactly the same thing", "Causation means two things are unrelated", "Correlation proves cause automatically"], answer: 0, explanation: "A relationship between two variables does not by itself prove that one causes the other." },
    { question: "Why is the original source of a statistic important?", options: ["It helps verify how the statistic was collected and reported", "It changes the statistic automatically", "It removes the need for analysis", "It guarantees the number is correct"], answer: 0, explanation: "The original source can explain the data, method and limitations." },
    { question: "You want AI to summarise a long article. What should you do with the summary?", options: ["Check it against the article for missing or incorrect points", "Assume every detail is accurate", "Delete the original article", "Use it as a verified quotation"], answer: 0, explanation: "Summaries can omit important details or misrepresent the original meaning." },
    { question: "What is the best way to use AI for brainstorming a project?", options: ["Ask for ideas, then evaluate and develop them independently", "Accept every suggestion as a fact", "Avoid understanding the topic", "Copy private data into the prompt"], answer: 0, explanation: "AI can suggest ideas, but people should assess their usefulness and accuracy." },
    { question: "A website uses a famous organisation's logo but has an unusual domain. What should you do?", options: ["Trust the logo", "Check the official domain independently", "Enter your login details", "Download its files immediately"], answer: 1, explanation: "Logos can be copied, so the website address and official source should be verified." },
    { question: "What is one limitation of AI-generated research?", options: ["It may contain outdated or fabricated information", "It always provides perfect citations", "It cannot generate text", "It only works without electricity"], answer: 0, explanation: "AI outputs can include outdated facts, errors or fabricated references." },
    { question: "How can you make an online research report more trustworthy?", options: ["Include credible references and distinguish facts from opinions", "Remove all source details", "Use only anonymous claims", "Hide conflicting evidence"], answer: 0, explanation: "Clear sourcing and honest treatment of evidence improve trustworthiness." },
    { question: "What is the best overall habit when using the internet and AI for learning?", options: ["Search carefully, compare sources, protect privacy and verify AI outputs", "Believe every result", "Share all personal information", "Avoid checking facts"], answer: 0, explanation: "Good digital research combines critical thinking, privacy awareness and verification." }
  ]
},
english: {
  1: [
    { question: "Which greeting is appropriate when meeting someone for the first time?", options: ["Go away", "Nice to meet you", "Be quiet", "What do you want?"], answer: 1, explanation: "Nice to meet you is a polite greeting when meeting someone for the first time." },
    { question: "Which sentence is grammatically correct?", options: ["She go to school", "She going school", "She goes to school", "She gone to school"], answer: 2, explanation: "With he, she or it in the simple present tense, the verb usually takes -s or -es." },
    { question: "What is the opposite of 'confident'?", options: ["Brave", "Nervous", "Certain", "Positive"], answer: 1, explanation: "Nervous can describe someone who lacks confidence." },
    { question: "Which word is used to ask about a person's name?", options: ["Where", "When", "What", "Why"], answer: 2, explanation: "What is used in the question 'What is your name?'." },
    { question: "Choose the correct response to 'How are you?'", options: ["I am fine, thank you", "My name is school", "Yesterday morning", "At the station"], answer: 0, explanation: "I am fine, thank you is a polite and natural response." },
    { question: "Which word is a polite way to request something?", options: ["Give", "Please", "Now", "Move"], answer: 1, explanation: "Please makes a request more polite." },
    { question: "Complete the sentence: 'I ___ a student.'", options: ["is", "are", "am", "be"], answer: 2, explanation: "I is used with am." },
    { question: "Which sentence is a question?", options: ["I like reading", "She is happy", "Where do you live?", "They play cricket"], answer: 2, explanation: "Where do you live? asks for information and ends with a question mark." },
    { question: "What does 'Thank you' express?", options: ["Anger", "Gratitude", "Confusion", "Fear"], answer: 1, explanation: "Thank you is used to express gratitude." },
    { question: "Which word completes the sentence: 'He is ___ honest person.'?", options: ["a", "an", "the", "no article"], answer: 1, explanation: "Honest begins with a vowel sound, so an is used." }
  ],
  2: [
    { question: "Choose the correct past tense of 'go'.", options: ["Goed", "Going", "Went", "Gone"], answer: 2, explanation: "Went is the simple past tense of go." },
    { question: "Complete the sentence: 'They ___ playing football.'", options: ["is", "am", "are", "was"], answer: 2, explanation: "They is a plural subject and takes are." },
    { question: "Which sentence is a polite request?", options: ["Open the door now!", "Could you please help me?", "You must do this!", "Move quickly!"], answer: 1, explanation: "Could you please help me? is a polite way to ask for assistance." },
    { question: "What is the plural of 'child'?", options: ["Childs", "Childes", "Children", "Childrens"], answer: 2, explanation: "Children is the irregular plural form of child." },
    { question: "Choose the correct preposition: 'The book is ___ the table.'", options: ["on", "at", "by", "from"], answer: 0, explanation: "On indicates that the book is resting on the table's surface." },
    { question: "Which word is closest in meaning to 'begin'?", options: ["Finish", "Start", "Stop", "Forget"], answer: 1, explanation: "Start and begin have similar meanings." },
    { question: "Complete the sentence: 'I have lived here ___ 2020.'", options: ["for", "since", "at", "by"], answer: 1, explanation: "Since is used with a starting point in time." },
    { question: "Which sentence uses punctuation correctly?", options: ["Where are you going.", "Where are you going?", "where are you going?", "Where are you going!?"], answer: 1, explanation: "A direct question begins with a capital letter and ends with a question mark." },
    { question: "What should you say when you do not understand someone?", options: ["Stop talking", "I don't care", "Could you please repeat that?", "Speak louder always"], answer: 2, explanation: "Politely asking someone to repeat helps communication." },
    { question: "Which word connects two contrasting ideas?", options: ["Because", "And", "But", "So"], answer: 2, explanation: "But introduces a contrast between ideas." }
  ],
  3: [
    { question: "You are introducing yourself in a classroom. Which is the best opening?", options: ["Who are all of you?", "Good morning, my name is Rahul.", "Listen to me now.", "I don't want to speak."], answer: 1, explanation: "A polite greeting followed by your name is a clear introduction." },
    { question: "Which behaviour shows active listening?", options: ["Interrupting frequently", "Looking at your phone", "Paying attention and asking relevant questions", "Ignoring the speaker"], answer: 2, explanation: "Active listening involves attention and meaningful responses." },
    { question: "Choose the correct sentence.", options: ["He don't like tea", "He doesn't like tea", "He not likes tea", "He doesn't likes tea"], answer: 1, explanation: "Doesn't is followed by the base form of the verb, like." },
    { question: "What is the main purpose of body language?", options: ["To communicate through gestures, posture and expressions", "To replace every spoken word", "To improve internet speed", "To write formal letters"], answer: 0, explanation: "Body language communicates feelings and information without words." },
    { question: "Which phrase is suitable for politely disagreeing?", options: ["You are completely foolish", "That is nonsense", "I understand your point, but I see it differently", "You must agree with me"], answer: 2, explanation: "This phrase expresses a different opinion respectfully." },
    { question: "Complete the sentence: 'If I study hard, I ___ pass the exam.'", options: ["will", "would have", "was", "has"], answer: 0, explanation: "The first conditional uses if + present simple and will + base verb." },
    { question: "Which sentence is in the present perfect tense?", options: ["I eat lunch", "I ate lunch", "I have eaten lunch", "I am eating lunch"], answer: 2, explanation: "Have eaten is the present perfect form." },
    { question: "What should you do during a group discussion?", options: ["Allow others to speak and contribute relevant ideas", "Speak continuously", "Ignore other opinions", "Change the topic randomly"], answer: 0, explanation: "Good group discussions involve listening and balanced participation." },
    { question: "Which word is a synonym of 'accurate'?", options: ["Correct", "Careless", "Unclear", "False"], answer: 0, explanation: "Accurate means correct or precise." },
    { question: "What is the best way to improve pronunciation?", options: ["Never speak aloud", "Practise listening and repeating words", "Avoid new words", "Speak as quickly as possible"], answer: 1, explanation: "Listening and repeating helps develop clearer pronunciation." }
  ],
  4: [
    { question: "You are sending an email to your teacher. Which opening is most appropriate?", options: ["Hey dude", "Respected Sir/Madam", "What's up?", "Listen teacher"], answer: 1, explanation: "Respected Sir/Madam is a formal and respectful opening." },
    { question: "Which sentence uses the correct subject-verb agreement?", options: ["The students is ready", "The students are ready", "The students was ready", "The students has ready"], answer: 1, explanation: "The plural subject students takes are." },
    { question: "What is the purpose of a summary?", options: ["To repeat every sentence", "To present the main ideas briefly", "To add unrelated information", "To change the original meaning"], answer: 1, explanation: "A summary communicates the important points concisely." },
    { question: "Which phrase is appropriate when asking for clarification in a meeting?", options: ["That makes no sense", "Could you explain that point again?", "I wasn't listening", "Skip this topic"], answer: 1, explanation: "A respectful clarification request helps avoid misunderstanding." },
    { question: "Choose the correct passive voice sentence for 'The teacher teaches English.'", options: ["English is taught by the teacher", "English taught the teacher", "The teacher is taught English", "English has teaching the teacher"], answer: 0, explanation: "The present simple passive uses is or are + past participle." },
    { question: "What is the best way to handle nervousness before speaking?", options: ["Avoid preparation", "Practise and take slow, steady breaths", "Speak without stopping", "Memorise every audience member's name"], answer: 1, explanation: "Preparation and controlled breathing can help manage speaking anxiety." },
    { question: "Which sentence is most suitable for a professional conversation?", options: ["Send me that thing", "Could you please share the document?", "Give it here", "Do it fast"], answer: 1, explanation: "Clear and polite language is suitable for professional communication." },
    { question: "What should a good paragraph usually contain?", options: ["One central idea supported by details", "Many unrelated topics", "Only punctuation marks", "No complete sentences"], answer: 0, explanation: "A focused paragraph develops one main idea with supporting information." },
    { question: "Which response shows empathy?", options: ["That is your problem", "I understand this may be difficult for you", "Stop complaining", "I don't want to listen"], answer: 1, explanation: "Empathy means recognising and responding considerately to another person's feelings." },
    { question: "What should you do after receiving constructive feedback?", options: ["Ignore everything", "Listen, reflect and identify improvements", "Argue immediately", "Blame someone else"], answer: 1, explanation: "Reflecting on feedback helps you improve your communication skills." }
  ],
  5: [
    { question: "You have to speak for two minutes about your school. What is the best structure?", options: ["Random sentences without order", "Introduction, main points and conclusion", "Only a list of names", "A long unrelated story"], answer: 1, explanation: "A clear structure helps the audience follow your message." },
    { question: "During a presentation, someone asks a difficult question. What should you do?", options: ["Make up an answer", "Listen carefully and answer honestly", "Ignore the person", "Become angry"], answer: 1, explanation: "Honest and thoughtful responses build trust with the audience." },
    { question: "Which is the most effective way to persuade an audience?", options: ["Use relevant evidence and clear reasoning", "Use insults", "Repeat unsupported claims", "Speak without any structure"], answer: 0, explanation: "Evidence and logical reasoning make an argument more convincing." },
    { question: "What is the best way to communicate with someone from a different language background?", options: ["Use clear language and check understanding", "Speak using complicated words", "Assume they understand everything", "Avoid listening"], answer: 0, explanation: "Clear language and checking understanding reduce communication barriers." },
    { question: "Which sentence is grammatically correct?", options: ["Neither of the boys are absent", "Neither of the boys is absent", "Neither boys is absent", "Neither of boys are absent"], answer: 1, explanation: "Neither is generally treated as singular in this construction." },
    { question: "What is the purpose of a transition phrase such as 'Furthermore'?", options: ["To connect ideas and improve flow", "To end every conversation", "To replace the subject", "To introduce an unrelated topic"], answer: 0, explanation: "Furthermore adds another related point to the discussion." },
    { question: "You disagree with a teammate's idea during a project discussion. What is the best response?", options: ["Reject it without explanation", "Explain your concerns respectfully and suggest an alternative", "Make fun of the teammate", "Stop participating"], answer: 1, explanation: "Respectful discussion helps teams compare ideas and find solutions." },
    { question: "Which is the strongest closing for a formal speech?", options: ["That's all, leave now", "Thank you for your time and attention", "I forgot what to say", "Whatever, goodbye"], answer: 1, explanation: "A polite closing gives the speech a professional ending." },
    { question: "What is an important part of digital communication etiquette?", options: ["Writing in all capital letters", "Using respectful language and checking messages before sending", "Sharing private messages publicly", "Sending repeated messages unnecessarily"], answer: 1, explanation: "Respectful and carefully written messages support good digital communication." },
    { question: "What is the best overall way to become a confident communicator?", options: ["Practise regularly, listen actively and learn from feedback", "Avoid conversations", "Memorise words without using them", "Speak as fast as possible"], answer: 0, explanation: "Regular practice, listening and feedback help develop communication skills." }
  ]
},
};