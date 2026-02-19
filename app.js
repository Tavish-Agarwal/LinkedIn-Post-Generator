const POST_TEMPLATES = [
    {
        id: 1,
        title: "Post 1: The One Question",
        topic: "Understanding the Business Fundamentally",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Tesla" },
            { key: "businessOneLiner", label: "One-Sentence Business Summary", type: "textarea", placeholder: "e.g., They sell electric cars and energy storage, but 80% of profit comes from cars." },
            { key: "revenueSource", label: "Main Revenue Source", type: "text", placeholder: "e.g., selling hardware" },
            { key: "confusionPoint", label: "What was confusing at first?", type: "textarea", placeholder: "e.g., I thought they were just a car company, but their software margins are key." }
        ],
        generate: (data) => {
            return `Before you buy ${data.companyName}, ask yourself this one question.

Most beginners jump straight to the charts. I used to do the same—and I lost money because of it.

The question is: "Can I explain this company's business in one sentence?"

If you can't, it's a warning sign. For ${data.companyName}, it took me a while.

Here is the simple version:
${data.businessOneLiner}

If you don't understand how they make money (mainly ${data.revenueSource}), you are gambling, not investing.

What to look for:
• Can you explain the revenue model to a 10-year-old?
• Do you know who their actual customer is?
• ${data.confusionPoint}

I'm simpler than most analysts. I find the latest investor deck and read the first 5 pages. If I'm still confused, I walk away.

I'm still learning this process myself, but this filter has saved me from buying hype I didn't verify.

👇 What's a company you understand deeply vs. one that always confuses you? Comment below.

#StockAnalysis #Investing #FinancialLiteracy #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 2,
        title: "Post 2: Industry Position",
        topic: "Competitive Advantage & Moat",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Coca-Cola" },
            { key: "moat", label: "What is their competitive moat?", type: "textarea", placeholder: "e.g., Unrivaled brand recognition and global distribution network." },
            { key: "pricingPower", label: "Do they have pricing power?", type: "text", placeholder: "e.g., They raised prices 5% last year and volume didn't drop." },
            { key: "industry", label: "Industry", type: "text", placeholder: "e.g., Beverages" }
        ],
        generate: (data) => {
            return `Why most people get ${data.companyName} wrong (it's not just the product).

It's about the Moat.

Warren Buffett talks about "castles and moats." The castle is the business. The moat is what protects it from competitors.

For ${data.companyName}, the moat isn't just the product—it's ${data.moat}.

Two signs of a strong moat I look for:
1. Pricing Power: ${data.pricingPower}
2. Mindshare: When you think of ${data.industry}, you think of them.

If a company has to lower prices to compete, they don't have a moat. They have a commodity.

I'm learning to look past the stock price and look at the "castle walls."

Who do you think has the strongest moat in the ${data.industry} industry?

#Investing #Moat #BusinessStrategy #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 3,
        title: "Post 3: Financial Statements",
        topic: "Reading the Reports That Matter",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Apple" },
            { key: "balanceSheet", label: "Balance Sheet Observation", type: "text", placeholder: "e.g., More cash than debt." },
            { key: "incomeStatement", label: "Income Statement Trend", type: "text", placeholder: "e.g., Revenue is growing but profits are flat." },
            { key: "cashFlow", label: "Cash Flow Insight", type: "text", placeholder: "e.g., They generate huge free cash flow despite low net income." }
        ],
        generate: (data) => {
            return `Reading financial reports for ${data.companyName} is easier than you think.

You don't need a finance degree. You just need to know where to look.

Here are the 3 things I check first:

1. The Balance Sheet (What they own vs. owe)
For ${data.companyName}: ${data.balanceSheet}

2. The Income Statement (How much they made)
Trend I noticed: ${data.incomeStatement}

3. The Cash Flow Statement (The truth serum)
Profit can be faked; cash cannot.
Insight: ${data.cashFlow}

Most people stop at the headlines. Spending 5 minutes on these three statements puts you ahead of 90% of retail investors.

I used to be intimidated by these spreadsheets. Now I treat them like a report card.

Which statement sounds most intimidating to you? Let's break it down.

#FinancialStatements #InvestingBasics #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 4,
        title: "Post 4: Key Metrics",
        topic: "P/E, ROE, Debt/Equity",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Microsoft" },
            { key: "peRatio", label: "P/E Ratio & Context", type: "text", placeholder: "e.g., 35x, which is high but historic for them." },
            { key: "roe", label: "Return on Equity (ROE)", type: "text", placeholder: "e.g., 40%, showing high management efficiency." },
            { key: "debt", label: "Debt Situation", type: "text", placeholder: "e.g., Long-term debt is manageable." }
        ],
        generate: (data) => {
            return `3 Metrics every beginner should know (using ${data.companyName} as an example).

Stock prices tell you nothing about value. Ratios tell the story.

Here are the big 3 I'm learning to check:

1. P/E Ratio (Price to Earnings)
${data.companyName} is trading at ${data.peRatio}
This tells you how much you're paying for $1 of their earnings.

2. ROE (Return on Equity)
It's at ${data.roe}
This measures how efficiently management uses your money. Higher is usually better.

3. Debt-to-Equity
Insight: ${data.debt}
High debt kills companies in downturns. I always check this safety valve.

I used to just buy "cheap" stocks (low share price). Now I look for quality at a fair price.

Want the deeper breakdown on these metrics? Check the link in the comments.

#InvestingMetrics #FundamentalAnalysis #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 5,
        title: "Post 5: Insider Behavior",
        topic: "Hidden Signals / Insider Buying",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Amazon" },
            { key: "insiderAction", label: "Recent Insider Activity", type: "text", placeholder: "e.g., The CEO bought $1M worth of shares." },
            { key: "interpretation", label: "What does this signal?", type: "text", placeholder: "e.g., Management believes the stock is undervalued." }
        ],
        generate: (data) => {
            return `The hidden signal most investors miss with ${data.companyName}.

"Insider Trading" sounds illegal. But looking at what insiders *do* with their own money is 100% legal and powerful.

With ${data.companyName}, here is what's happening:
${data.insiderAction}

Why this matters:
Insiders sell for many reasons (taxes, buying a house, divorce).
But they only BUY for one reason: They think the price is going up.

${data.interpretation}

This is called "Skin in the Game." I sleep better knowing the people running the company are betting on it too.

Have you ever checked insider holdings before buying?

#InsiderTrading #SkinInTheGame #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 6,
        title: "Post 6: Growth vs. Value",
        topic: "Assessment & PEG Ratio",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Nvidia" },
            { key: "stockType", label: "Is it Growth or Value?", type: "text", placeholder: "e.g., Pure Growth." },
            { key: "valuationCheck", label: "Is it expensive?", type: "textarea", placeholder: "e.g., It looks expensive by P/E, but considering 50% growth, it's fair." }
        ],
        generate: (data) => {
            return `Growth vs. Value: How to spot the difference with ${data.companyName}.

Not all stocks are judged the same.

${data.companyName} is a classic ${data.stockType} play.

If you judge a Growth stock like a Value stock, you'll never buy it (it always looks expensive).
If you judge a Value stock like a Growth stock, you'll lose money (it's cheap for a reason).

My assessment of ${data.companyName}:
${data.valuationCheck}

I use the PEG ratio (Price/Earnings-to-Growth) to bridge the gap. It helps me see if the growth justifies the price tag.

Which appeals to you more right now—steady Value or high-flying Growth?

#GrowthInvesting #ValueInvesting #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 7,
        title: "Post 7: Valuation",
        topic: "Fair Value & Historical Context",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Starbucks" },
            { key: "currentPrice", label: "Current Price Context", type: "text", placeholder: "e.g., Down 20% from highs." },
            { key: "fairValue", label: "Do you think it's fair value?", type: "textarea", placeholder: "e.g., Historically it trades at 25x earnings, now it's at 18x. Seems undervalued." }
        ],
        generate: (data) => {
            return `The valuation question nobody asks first.

"Is ${data.companyName} a good company?"
vs.
"Is ${data.companyName} a good stock to buy *right now*?"

These are different questions. A great company can be a terrible investment if you overpay.

Right now, ${data.companyName} is ${data.currentPrice}.

How I judge Fair Value:
${data.fairValue}

I'm learning to wait for the "fat pitch"—when a great business goes on sale for a temporary reason.

Share a stock you think is overvalued right now. 👇

#Valuation #StockMarket #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 8,
        title: "Post 8: Red Flags",
        topic: "Risk Assessment",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Peloton" },
            { key: "redFlag1", label: "Major Red Flag", type: "text", placeholder: "e.g., Inventory is piling up faster than sales." },
            { key: "redFlag2", label: "Secondary Concern", type: "text", placeholder: "e.g., Management keeps changing metrics." }
        ],
        generate: (data) => {
            return `Red Flags I've learned to watch for.

I looked at ${data.companyName} recently. Here is what caught my eye (and not in a good way).

Warning Signs:
🚩 ${data.redFlag1}
🚩 ${data.redFlag2}

When metrics diverge (like profit going up but cash flow going down), pay attention. That gap is often where the problems hide.

I'm a beginner, so I'm cautious. If I see a red flag I can't explain away, I pass. There are thousands of other stocks.

What's a red flag that made you avoid a stock recently?

#InvestingTips #RedFlags #${data.companyName.replace(/\s/g, '')}`
        }
    },
    {
        id: 9,
        title: "Post 9: The Checklist",
        topic: "Systematic Approach",
        inputs: [
            { key: "hardestStep", label: "Hardest step for you?", type: "text", placeholder: "e.g., Determining Fair Value." },
            { key: "bestInsight", label: "Best insight from this process", type: "text", placeholder: "e.g., Avoiding hype saves more money than picking winners." }
        ],
        generate: (data) => {
            return `Putting it all together: My 6-Step Analysis Checklist.

Over the last few weeks, I've built a framework to analyze stocks so I don't just "guess."

Here is the system:
1. Understand the Business (The "One Sentence" Test)
2. Check the Moat & Industry
3. Scan Financial Health (Balance Sheet/Cash Flow)
4. Verify Metrics (P/E, ROE)
5. Check Insider Alignment
6. Valuation (Is it cheap?)

For me, the hardest step is: ${data.hardestStep}

But the biggest lesson has been: ${data.bestInsight}

Systems beat emotions. Always.

Which step do you find hardest? Let's discuss.

#InvestingStrategy #Checklist #Learning`
        }
    },
    {
        id: 10,
        title: "Post 10: Live Case Study",
        topic: "Full Analysis & Verdict",
        inputs: [
            { key: "companyName", label: "Company Name", type: "text", placeholder: "e.g., Google" },
            { key: "summary", label: "Analysis Summary", type: "textarea", placeholder: "e.g., Great moat, cash machine, but regulatory risks are high." },
            { key: "verdict", label: "Your Verdict (Buy/Watch/Pass)", type: "text", placeholder: "e.g., Watchlist for a 10% dip." }
        ],
        generate: (data) => {
            return `Analyzing ${data.companyName}: A Live Case Study.

I applied my full 6-step framework to ${data.companyName}. Here is what I found.

The Good:
• Incredible cash flow generation.
• deeply entrenched moat (search dominance).

The Bad:
• Regulatory headwinds.
• Valuation is slightly stretched.

My Summary:
${data.summary}

My Verdict:
${data.verdict}

I'm not a financial advisor, just a student of the market. This process forced me to look at facts, not feelings.

Should I invest in this stock? What are your thoughts on ${data.companyName}?

#StockAnalysis #CaseStudy #${data.companyName.replace(/\s/g, '')}`
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
