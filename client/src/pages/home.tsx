import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter, Moon, Sun } from "lucide-react";
import profileImage from "@assets/IMG_1569_1766626569319.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen w-full bg-background relative selection:bg-primary/10 transition-colors duration-300">
      {/* Top Right Navigation */}
      <nav className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full hover:bg-foreground hover:text-background transition-colors mr-2"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">X (Twitter)</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="shrink-0 mb-4"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-sm">
                <img 
                  src={profileImage} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </motion.div>

            <div className="space-y-4 max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Shaurya Dubey
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg leading-relaxed text-foreground/90 font-light max-w-2xl mx-auto px-4"
            >
              Working on commercial finance for Circle ($USDC) and writing about crypto current events at <a href="https://underwritingcrypto.substack.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-primary transition-colors">Underwriting Crypto</a>. My email is dubeyshaurya@gmail.com and my twitter handle is <a href="https://x.com/shaudub" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-primary transition-colors">@shaudub</a>.
            </motion.p>
          </div>

          {/* Accordion Sections */}
          <div className="max-w-2xl mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="experience" className="border-border/40">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Experience
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <p className="text-lg leading-relaxed text-muted-foreground font-light mb-4">
                    My work at Circle focuses on commercial incentives, specifically understanding how partnership revenue sharing influences USDC circulation growth and net interest margin. Other initiatives I've contributed to include analyses for new product lines, marketing spend planning, and helping <a href="https://www.sec.gov/Archives/edgar/data/1876042/000119312525070481/d737521ds1.htm" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-primary transition-colors">take $CRCL public</a>. The best parts of my work are interdisciplinary, and I am lucky to collaborate with teams in data science, marketing, product, investor relations, and more.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="past-experience" className="border-t border-border/40">
                      <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary transition-colors py-3">
                        Past Experience
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-2">
                        <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4">
                          <p>
                            I previously worked as a financial analyst at Microsoft. I got to work on 6 different teams (internship included) in my time there.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Spot pricing for Azure Virtual Machines</li>
                            <li>Commercial bookings and renewals</li>
                            <li>Margin strategy for ERP/CRM offerings</li>
                            <li>Revenue planning / strategy for developer division</li>
                            <li>Korea sales finance for hardware and ERP/CRM (lived in Seoul for 6 months)</li>
                            <li>Treasury cash flow data science</li>
                          </ul>
                          <p>
                            I also <a href="https://x.com/pluralitybook/status/1771969609484136633?s=20" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-primary transition-colors">contributed</a> to work within the Plural Technology Collaboratory, a division of MS Research special projects. A highlight is the plurality book, an open-source body of text written through a code repository where commits are approved through a governance solution called Gov4Git.
                          </p>
                          <p>
                            I grew up in the Bay Area and graduted from UT Austin. My coursework revolved around finance, statistics, and philosophy.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="writing" className="border-border/40">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Writing
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      I write in a crypto current events blog called Underwriting Crypto. We post 5 notable events from the industry every 2 weeks and offer an objective overview of what happened, with a not-as-objective take on what happened on each topic.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      Selected excerpts of my writing are below - for the rest, visit our substack.
                    </p>
                  </div>

                  <div className="space-y-6 pl-4 border-l border-border/50">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-4" className="border-border/40">
                        <AccordionTrigger className="hover:no-underline py-2 group text-left">
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-sm text-muted-foreground font-normal">December 2025</span>
                            <a href="https://underwritingcrypto.substack.com/p/underwriting-crypto-122-1215" target="_blank" rel="noopener noreferrer" className="text-xl font-medium group-hover:text-primary transition-colors text-left" onClick={(e) => e.stopPropagation()}>Hyperliquid deploys native USDC with CCTP route</a>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4">
                            <p>Hyperliquid is moving beyond its bridged USDC training wheels with native USDC and CCTP integration on HyperEVM. Before, users got USDC (on a CEX), sent to their address on Arbitrum, then sent to a Hyperliquid contract on Arbitrum that stores the native USDC, then credits the users HyperCore balance, enabling trading. Now users can use the CCTP bridge to send native USDC directly to HyperEVM with smooth interop with HyperCore, improving security, simplifying the experience, and lowering fees.</p>
                            <p>What exactly is HyperCore and HyperEVM? Hyperliquid’s L1 architecture has two surfaces with the same consensus mechanism. HyperCore is the order book DEX where liquidity lives, optimized for speed and scalability. Its emphasis on trading operations makes it great for traders, but less flexible as a platform for general smart contract development. HyperEVM fills the gap, offering an EVM smart contract layer to build on Hypercore’s liquidity with a dev friendly experience. The two communicate via HyperBridges, allowing seamless asset transfers.</p>
                            <p>Over 4B of bridged USDC means multiple less-than-ideal things for Hyperliquid and users:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Most users needs ETH and USDC on Arbitrum to use Hyperliquid</li>
                              <li>Native USDC was stored on an Arbitrum contract, increasing honeypot risk</li>
                              <li>Bridged USDC used for trading on HyperCore needed to be manually bridged to HyperEVM to be used in apps</li>
                            </ul>
                            <p>The integration of native USDC on HyperEVM and a native CCTP route to HyperEVM unifies liquidity, enables one-click transfers, seamless interop, and lower fees. The CoreDepositWallet contract takes native USDC and credits HyperCore protocol balances, directly backed by native USDC on HyperEVM.</p>
                            <p>USDC is the main quote asset on Hyperliquid, so this deployment is a win for Hyperliquid, Circle, and users alike, driving seamless interop, unified liquidity, and one-click transfers with lower fees. The transition from Hypercore bridged USDC to native USDC is now underway, with the Arbitrum bridge still active as a fallback, though public statements from Hyperliquid indicate it will be deprecated.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-border/40">
                        <AccordionTrigger className="hover:no-underline py-2 group text-left">
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-sm text-muted-foreground font-normal">November 2025</span>
                            <a href="https://underwritingcrypto.substack.com/p/underwriting-crypto-1117-121" target="_blank" rel="noopener noreferrer" className="text-xl font-medium group-hover:text-primary transition-colors text-left" onClick={(e) => e.stopPropagation()}>Robinhood and Kalshi’s situationship is in jeopardy</a>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4">
                            <p>Back in February, Robinhood tapped Kalshi as a partner to bring prediction markets (betting on politics, pop culture, etc.) to their 26M users, starting off with football betting. These are not “sports bets” but are considered commodities contracts under federal oversight, enabling what is effectively sports betting (and other betting) in all 50 states.</p>
                            <p>Kalshi’s CFTC licensed exchange was an attractive partnership for Robinhood to jumpstart prediction markets on their platform - now the thesis has been proven, with ARR estimates at $300M, representing 30%-50% of the total fee pool. Analysts estimate Robinhood represents over 50% of all Kalshi volumes - why split this amount with Kalshi if they own the distribution?</p>
                            <p>Robinhood has now acquired the exchange and clearinghouse MIAdx in partnership with market maker SIG. Now, they can handle wagers and cash flow in house, giving them full margin on trading fees. They had $2.5B worth of contracts traded in October generating 25M in revenue (1 cent per contract / 1bp take rate). An increased take rate from in house markets (launching Q1 2026) and a rapidly accelerating total volume (130% QoQ) set high expectations and demonstrate the power of a solid distribution network and clear PMF.</p>
                            <p>The space continues to heat up with multiple players acquiring or partnering with exchanges to claim their stake: Polymarket acquired QCX, DraftKings acquired RailBird, and FanDuel is partnering with the CME group. No doubt Coinbase and other neobank competitors will soon follow.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-border/40">
                        <AccordionTrigger className="hover:no-underline py-2 group text-left">
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-sm text-muted-foreground font-normal">November 2025</span>
                            <a href="https://underwritingcrypto.substack.com/p/underwriting-crypto-covering-114" target="_blank" rel="noopener noreferrer" className="text-xl font-medium group-hover:text-primary transition-colors text-left" onClick={(e) => e.stopPropagation()}>CashApp launchs BTC payments and stablecoin support</a>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4">
                            <p>Block does multiple things - they run Cashapp, Square, Afterpay, Tidal, Proto (BTC mining), and Bitkey (BTC hardware wallets). Hell of a lineup merging consumer payments, merchant acceptance, lending, economic sovereignty, and now, the ability to transact in bitcoin and stablecoins.</p>
                            <p>58M users can send funds over the lightning network without having to spend/hold bitcoin - this means they can spend fiat and the merchant receives bitcoin as payment. Additionally, these users can convert USD to USDC instantly and send P2P or merchant payments over the Solana network.</p>
                            <p>Some other fun facts:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Square sellers that enable bitcoin acceptance get zero fees on sales</li>
                              <li>Jack Dorsey is a top contender for Satoshi Nakamoto’s true identity</li>
                              <li>58M users means 1 in 6 people in the United States use CashApp</li>
                              <li>40% of CashApps userbase makes under 50K annually</li>
                            </ul>
                            <div className="pt-4">
                              <p className="font-bold mb-2">Shaurya’s take</p>
                              <p>It’s hard to find a company that has done more for Bitcoin than Block. Diversifying BTC mining with Proto, making self-custody sexy with Bitkey, and incorporating BTC directly into its well-developed payments ecosystem is no small feat. Using BTC for payments and enabling merchant acceptance at scale marks an undeniable transition for BTC from “Store of Value” to also being a “Medium of Exchange”, making it feel more like money than ever before. Add in Solana addresses and instant, spread fee USDC onramps for all 58M users, and crypto makes another step towards being the default financial system for the future.</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-1" className="border-border/40">
                        <AccordionTrigger className="hover:no-underline py-2 group text-left">
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-sm text-muted-foreground font-normal">October 2025</span>
                            <a href="https://underwritingcrypto.substack.com/p/underwriting-crypto-covering-1021" target="_blank" rel="noopener noreferrer" className="text-xl font-medium group-hover:text-primary transition-colors text-left" onClick={(e) => e.stopPropagation()}>Banks build stablecoins into Zelle</a>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4">
                            <p>Early Warning Services, the joint venture behind Zelle, is incorporating a stablecoin into Zelle for cross border payments. Zelle processed $1T in volume in 2024 across 2,200 connected banks. The seven owner banks are BofA, Capital One, JPMorgan Chase, PNC, Truist, U.S. Bank, and Wells Fargo.</p>
                            <p>Separately, banks are pursuing a consortium approach for G7 currency stablecoins including USD, EUR, JPY, GBP, and CAD.</p>
                            <div className="pt-4">
                              <p className="font-bold mb-2">Shaurya’s take</p>
                              <p className="mb-4">Zelle offers immediate distribution but questionable circulation stickiness. If the main purpose is cross border, this will likely be the classic stablecoin sandwich setup on a blockchain based ACH equivalent.</p>
                              <p>Split T-Bill returns seven ways and each bank gets maybe 57 basis points assuming 4% yield and no revenue sharing. Compare that to the Q1 2025 bank net interest margin of 3.25% on traditional deposits. When rehypothecation is limited, banks lose money. This is why consortium bank plays are challenging and why tokenized deposits are the most likely outcome for bank led RWAs. Still, leveraging blockchain infrastructure on $1T of volumes is a net positive. Interop battles and competition from Arc and Tempo incoming.</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
