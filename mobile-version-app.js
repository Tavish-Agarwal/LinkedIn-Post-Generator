const POST_TEMPLATES = [
    {
        id: 1,
        title: "The One Question",
        topic: "Understanding the Business Fundamentally",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Tesla" },
            { key: "businessOneLiner", label: "One-Sentence Business Summary", type: "textarea", placeholder: "e.g., They sell electric cars and energy storage..." },
            { key: "revenueSource", label: "Main Revenue Source", type: "text", placeholder: "e.g., selling hardware" },
            { key: "confusionPoint", label: "What was confusing at first?", type: "textarea", placeholder: "e.g., I thought they were just a car company..." }
        ],
        generate: (data) => {
            return `Before you buy ${data.companyName}, ask yourself this one question.\n\nMost beginners jump straight to the charts. I used to do the same—and I lost money because of it.\n\nThe question is: "Can I explain this company's business in one sentence?"\n\nIf you can't, it's a warning sign. For ${data.companyName}, it took me a while.\n\nHere is the simple version:\n${data.businessOneLiner}\n\nIf you don't understand how they make money (mainly ${data.revenueSource}), you are gambling, not investing.\n\nWhat to look for:\n• Can you explain the revenue model to a 10-year-old?\n• Do you know who their actual customer is?\n• ${data.confusionPoint}\n\nI'm simpler than most analysts. I find the latest investor deck and read the first 5 pages. If I'm still confused, I walk away.\n\nI'm still learning this process myself, but this filter has saved me from buying hype I didn't verify.\n\n👇 What's a company you understand deeply vs. one that always confuses you? Comment below.\n\n#StockAnalysis #Investing #FinancialLiteracy #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 2,
        title: "Industry Position",
        topic: "Competitive Advantage & Moat",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Coca-Cola" },
            { key: "moat", label: "What is their competitive moat?", type: "textarea", placeholder: "e.g., Unrivaled brand recognition..." },
            { key: "pricingPower", label: "Do they have pricing power?", type: "text", placeholder: "e.g., Raised prices 5%..." },
            { key: "industry", label: "Industry", type: "text", placeholder: "e.g., Beverages" }
        ],
        generate: (data) => {
            return `Why most people get ${data.companyName} wrong (it's not just the product).\n\nIt's about the Moat.\n\nWarren Buffett talks about "castles and moats." The castle is the business. The moat is what protects it from competitors.\n\nFor ${data.companyName}, the moat isn't just the product—it's ${data.moat}.\n\nTwo signs of a strong moat I look for:\n1. Pricing Power: ${data.pricingPower}\n2. Mindshare: When you think of ${data.industry}, you think of them.\n\nIf a company has to lower prices to compete, they don't have a moat. They have a commodity.\n\nI'm learning to look past the stock price and look at the "castle walls."\n\nWho do you think has the strongest moat in the ${data.industry} industry?\n\n#Investing #Moat #BusinessStrategy #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 3,
        title: "Financial Statements",
        topic: "Reading the Reports That Matter",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Apple" },
            { key: "balanceSheet", label: "Balance Sheet Observation", type: "text", placeholder: "e.g., More cash than debt." },
            { key: "incomeStatement", label: "Income Statement Trend", type: "text", placeholder: "e.g., Growing revenue..." },
            { key: "cashFlow", label: "Cash Flow Insight", type: "text", placeholder: "e.g., Huge free cash flow..." }
        ],
        generate: (data) => {
            return `Reading financial reports for ${data.companyName} is easier than you think.\n\nYou don't need a finance degree. You just need to know where to look.\n\nHere are the 3 things I check first:\n\n1. The Balance Sheet (What they own vs. owe)\nFor ${data.companyName}: ${data.balanceSheet}\n\n2. The Income Statement (How much they made)\nTrend I noticed: ${data.incomeStatement}\n\n3. The Cash Flow Statement (The truth serum)\nProfit can be faked; cash cannot.\nInsight: ${data.cashFlow}\n\nMost people stop at the headlines. Spending 5 minutes on these three statements puts you ahead of 90% of retail investors.\n\nI used to be intimidated by these spreadsheets. Now I treat them like a report card.\n\nWhich statement sounds most intimidating to you? Let's break it down.\n\n#FinancialStatements #InvestingBasics #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 4,
        title: "Key Metrics",
        topic: "P/E, ROE, Debt/Equity",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Microsoft" },
            { key: "peRatio", label: "P/E Ratio & Context", type: "text", placeholder: "e.g., 35x, high but historic..." },
            { key: "roe", label: "Return on Equity (ROE)", type: "text", placeholder: "e.g., 40%..." },
            { key: "debt", label: "Debt Situation", type: "text", placeholder: "e.g., Manageable..." }
        ],
        generate: (data) => {
            return `3 Metrics every beginner should know (using ${data.companyName} as an example).\n\nStock prices tell you nothing about value. Ratios tell the story.\n\nHere are the big 3 I'm learning to check:\n\n1. P/E Ratio (Price to Earnings)\n${data.companyName} is trading at ${data.peRatio}\nThis tells you how much you're paying for $1 of their earnings.\n\n2. ROE (Return on Equity)\nIt's at ${data.roe}\nThis measures how efficiently management uses your money. Higher is usually better.\n\n3. Debt-to-Equity\nInsight: ${data.debt}\nHigh debt kills companies in downturns. I always check this safety valve.\n\nI used to just buy "cheap" stocks (low share price). Now I look for quality at a fair price.\n\nWant the deeper breakdown on these metrics? Check the link in the comments.\n\n#InvestingMetrics #FundamentalAnalysis #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 5,
        title: "Insider Behavior",
        topic: "Hidden Signals / Insider Buying",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Amazon" },
            { key: "insiderAction", label: "Recent Insider Activity", type: "text", placeholder: "e.g., CEO bought $1M shares." },
            { key: "interpretation", label: "What does this signal?", type: "text", placeholder: "e.g., Management is confident..." }
        ],
        generate: (data) => {
            return `The hidden signal most investors miss with ${data.companyName}.\n\n"Insider Trading" sounds illegal. But looking at what insiders *do* with their own money is 100% legal and powerful.\n\nWith ${data.companyName}, here is what's happening:\n${data.insiderAction}\n\nWhy this matters:\nInsiders sell for many reasons (taxes, buying a house, divorce).\nBut they only BUY for one reason: They think the price is going up.\n\n${data.interpretation}\n\nThis is called "Skin in the Game." I sleep better knowing the people running the company are betting on it too.\n\nHave you ever checked insider holdings before buying?\n\n#InsiderTrading #SkinInTheGame #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 6,
        title: "Growth vs. Value",
        topic: "Assessment & PEG Ratio",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Nvidia" },
            { key: "stockType", label: "Is it Growth or Value?", type: "text", placeholder: "e.g., Pure Growth." },
            { key: "valuationCheck", label: "Is it expensive?", type: "textarea", placeholder: "e.g., Looks expensive by P/E..." }
        ],
        generate: (data) => {
            return `Growth vs. Value: How to spot the difference with ${data.companyName}.\n\nNot all stocks are judged the same.\n\n${data.companyName} is a classic ${data.stockType} play.\n\nIf you judge a Growth stock like a Value stock, you'll never buy it (it always looks expensive).\nIf you judge a Value stock like a Growth stock, you'll lose money (it's cheap for a reason).\n\nMy assessment of ${data.companyName}:\n${data.valuationCheck}\n\nI use the PEG ratio (Price/Earnings-to-Growth) to bridge the gap. It helps me see if the growth justifies the price tag.\n\nWhich appeals to you more right now—steady Value or high-flying Growth?\n\n#GrowthInvesting #ValueInvesting #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 7,
        title: "Valuation",
        topic: "Fair Value & Historical Context",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Starbucks" },
            { key: "currentPrice", label: "Current Price Context", type: "text", placeholder: "e.g., Down 20% from highs." },
            { key: "fairValue", label: "Do you think it's fair value?", type: "textarea", placeholder: "e.g., Historically trades at 25x..." }
        ],
        generate: (data) => {
            return `The valuation question nobody asks first.\n\n"Is ${data.companyName} a good company?"\nvs.\n"Is ${data.companyName} a good stock to buy *right now*?"\n\nThese are different questions. A great company can be a terrible investment if you overpay.\n\nRight now, ${data.companyName} is ${data.currentPrice}.\n\nHow I judge Fair Value:\n${data.fairValue}\n\nI'm learning to wait for the "fat pitch"—when a great business goes on sale for a temporary reason.\n\nShare a stock you think is overvalued right now. 👇\n\n#Valuation #StockMarket #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 8,
        title: "Red Flags",
        topic: "Risk Assessment",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Peloton" },
            { key: "redFlag1", label: "Major Red Flag", type: "text", placeholder: "e.g., Inventory piling up..." },
            { key: "redFlag2", label: "Secondary Concern", type: "text", placeholder: "e.g., Management changing metrics..." }
        ],
        generate: (data) => {
            return `Red Flags I've learned to watch for.\n\nI looked at ${data.companyName} recently. Here is what caught my eye (and not in a good way).\n\nWarning Signs:\n🚩 ${data.redFlag1}\n🚩 ${data.redFlag2}\n\nWhen metrics diverge (like profit going up but cash flow going down), pay attention. That gap is often where the problems hide.\n\nI'm a beginner, so I'm cautious. If I see a red flag I can't explain away, I pass. There are thousands of other stocks.\n\nWhat's a red flag that made you avoid a stock recently?\n\n#InvestingTips #RedFlags #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 9,
        title: "The Checklist",
        topic: "Systematic Approach",
        inputs: [
            { key: "hardestStep", label: "Hardest step for you?", type: "text", placeholder: "e.g., Determining Fair Value." },
            { key: "bestInsight", label: "Best insight from this process", type: "text", placeholder: "e.g., Avoiding hype saves money..." }
        ],
        generate: (data) => {
            return `Putting it all together: My 6-Step Analysis Checklist.\n\nOver the last few weeks, I've built a framework to analyze stocks so I don't just "guess."\n\nHere is the system:\n1. Understand the Business (The "One Sentence" Test)\n2. Check the Moat & Industry\n3. Scan Financial Health (Balance Sheet/Cash Flow)\n4. Verify Metrics (P/E, ROE)\n5. Check Insider Alignment\n6. Valuation (Is it cheap?)\n\nFor me, the hardest step is: ${data.hardestStep}\n\nBut the biggest lesson has been: ${data.bestInsight}\n\nSystems beat emotions. Always.\n\nWhich step do you find hardest? Let's discuss.\n\n#InvestingStrategy #Checklist #Learning`
        }
    },
    {
        id: 10,
        title: "Live Case Study",
        topic: "Full Analysis & Verdict",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Google" },
            { key: "summary", label: "Analysis Summary", type: "textarea", placeholder: "e.g., Great moat, cash machine..." },
            { key: "verdict", label: "Your Verdict (Buy/Watch/Pass)", type: "text", placeholder: "e.g., Watchlist for a 10% dip." }
        ],
        generate: (data) => {
            return `Analyzing ${data.companyName}: A Live Case Study.\n\nI applied my full 6-step framework to ${data.companyName}. Here is what I found.\n\nThe Good:\n• Incredible cash flow generation.\n• deeply entrenched moat (search dominance).\n\nThe Bad:\n• Regulatory headwinds.\n• Valuation is slightly stretched.\n\nMy Summary:\n${data.summary}\n\nMy Verdict:\n${data.verdict}\n\nI'm not a financial advisor, just a student of the market. This process forced me to look at facts, not feelings.\n\nShould I invest in this stock? What are your thoughts on ${data.companyName}?\n\n#StockAnalysis #CaseStudy #${data.companyName.replace(/\s/g, '')}`
        }
    }
];

// App Logic
document.addEventListener('DOMContentLoaded', () => {
    const postSelector = document.getElementById('postSelector');
    const inputForm = document.getElementById('inputForm');
    const currentPostTitle = document.getElementById('currentPostTitle');
    const currentPostDescription = document.getElementById('currentPostDescription');
    const generateBtn = document.getElementById('generateBtn');
    const outputContent = document.getElementById('outputContent');
    const copyBtn = document.getElementById('copyBtn');
    const actionBar = document.getElementById('actionBar');
    const charCount = document.getElementById('charCount');
    const previewArea = document.getElementById('previewArea');
    const editorArea = document.getElementById('editorArea');
    const closePreviewBtn = document.getElementById('closePreviewBtn');

    let currentTemplateId = null;

    // Initialize Sidebar
    POST_TEMPLATES.forEach(template => {
        const btn = document.createElement('button');
        btn.className = 'post-btn';
        btn.textContent = template.title;
        btn.onclick = () => selectTemplate(template.id, btn);
        postSelector.appendChild(btn);
    });

    function selectTemplate(id, btnElement) {
        // Update active state
        document.querySelectorAll('.post-btn').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');

        currentTemplateId = id;
        const template = POST_TEMPLATES.find(t => t.id === id);

        // Update Header
        currentPostTitle.textContent = template.title;
        currentPostDescription.textContent = template.topic;

        // generated inputs
        inputForm.innerHTML = '';
        template.inputs.forEach(input => {
            const group = document.createElement('div');
            group.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = input.label;

            let field;
            if (input.type === 'textarea') {
                field = document.createElement('textarea');
            } else {
                field = document.createElement('input');
                field.type = input.type;
            }

            field.placeholder = input.placeholder;
            field.id = input.key;
            field.name = input.key;

            group.appendChild(label);
            group.appendChild(field);
            inputForm.appendChild(group);
        });

        inputForm.classList.remove('hidden');
        actionBar.classList.remove('hidden');

        // Clear previous output
        outputContent.textContent = 'Fill out the form and click Generate...';
        copyBtn.disabled = true;
        updateCharCount();

        // Scroll to form on mobile
        inputForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    generateBtn.addEventListener('click', () => {
        if (!currentTemplateId) return;

        const template = POST_TEMPLATES.find(t => t.id === currentTemplateId);
        const data = {};

        const inputs = inputForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            data[input.name] = input.value || `[${input.name}]`;
        });

        const postContent = template.generate(data);
        outputContent.textContent = postContent;
        copyBtn.disabled = false;

        updateCharCount();

        // Show preview area (mobile flow)
        if (window.innerWidth <= 768) {
            editorArea.classList.add('hidden');
            previewArea.classList.remove('hidden');
            previewArea.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Desktop behavior (ensure preview is visible if it was hidden)
            previewArea.classList.remove('hidden');
        }
    });

    closePreviewBtn.addEventListener('click', () => {
        // Go back to editor
        previewArea.classList.add('hidden');
        editorArea.classList.remove('hidden');
    });

    copyBtn.addEventListener('click', () => {
        const text = outputContent.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });

    outputContent.addEventListener('input', updateCharCount);

    function updateCharCount() {
        const text = outputContent.textContent;
        const words = text.trim().split(/\s+/).length;
        const chars = text.length;
        charCount.textContent = `${words} words / ${chars} chars`;
    }
});
