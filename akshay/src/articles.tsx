import './articles.css'

interface article {
    [key: number]: {
        name: any;
        summary: any;
        content: any;
    }
}


const articles: article = {
    1: {
        name: <h1>A Night With Flexbox</h1>,
        summary: [<p><b>It was a scary night.</b> God of CSS had set the background-color to ‘grey’ and most things had went ‘display: none’. The clock had started yawning A…M and in such a dark and void night, Flexbox was walking home, alone and hurriedly...</p>],
        content: [
            <>
                <p><b>It was a scary night.</b> God of CSS had set the <i>background-color</i> to ‘grey’ and most things had went <i>‘display: none’</i>. The clock had started yawning A…M. And in such a dark and void night, Flexbox was walking home, alone and hurriedly, after a long hectic day of aligning items and justifying content. He was scared. He had heard a lot of rumours about this area and this street in particular, although he never believed them.</p>

                <p>  Flexbox believed in science. He knew that the world is governed by the laws of <i>box-model</i>. Most people around him believed that these laws of box-model were set by some divine God called Jesus Webdev but Flexbox was a bitter follower of atheism. He believed that life has no purpose or any meaning. <i>‘Shrink-grow-wrap-repeat’</i>, that’s the only life he knew.</p>

                <img
                    src="/manWalking.jpg"
                    alt="A man walking in dark alone"
                />

                <p>
                    That scarry night…
                    Flexbox always despised the concept of ghosts and people believing in ghosts. But as the background-color started getting darker and more things went to display: none, Flexbox started doubting his beliefs.
                </p>

                <p>  Nights like these are not the best time to ponder over the existence of ghosts, but Flexbox had seen many of his atheist friends turning to God in such situations. He tried distracting himself by thinking about something else.</p>

                <p>
                    Flexbox had a measurable past. In school, his classmates used to bully him for being so mild. His co-workers would call him a ‘beta’. However, Flexbox had no trouble finding women for dates (for obvious reasons) but Flexbox found it hard to make meaningful relationships. As soon as someone becomes close to him, he would start increasing margin and padding. In his office, there was a girl named Grid. He really liked her but the problem was she was obsessively tidy. She hated asymmetry. Flexbox on the other hand never gave much thought to such things. He knew himself very well. He would rather be part of the mess rather than fixing the mess. So their relationship never went further than friendship. Later Flexbox came to know that Grid actually was in relation with some guy named Table. So Flexbox finally gave up on her.

                </p>
                <p>A bat flew right above him almost crashing into his head. Flexbox felt like his heart stopped for a moment. He looked around. It was totally black now. He wondered if his legs had some kind of memory. He had covered almost half of his way home in such darkness. He checked the clock. It was already past midnight. He hastened his walk. The silence was fueling the fear and his boots had assumed the role of an orator. Suddenly something came under his feet and he trembled. His hands struggled to find some support but couldn’t. Finally, his legs gave up and he fell to the ground.</p>

                <p>
                    As Flexbox hit the ground, he felt his carefully maintained structure collapse. For a moment, he lay there, sprawled across the dark street like a set of divs without proper alignment.

                </p>
                <p>
                    “Get a grip,” he muttered to himself, trying to flex his way back to his feet. But something was off. His usually flexible joints felt stiff, almost… blocked.

                </p>
                <p>
                    Suddenly, a deep, terrifying voice boomed from the darkness: “Well, well, well. If it isn’t Mr. Flexible himself, out for a midnight walk.”

                </p>
                <p>Flexbox froze. He knew that voice. It was the voice of his old foe, Block Elementiston.</p>

                <p> “B-Block?” Flexbox stuttered, trying to maintain his cool. “What are you doing here? I thought you were deprecated!”</p>

                <p> Block giggled, a sound that sent shivers down Flexbox’s spine. “Deprecated? Oh, you modern layouts think you’re so clever. But some of us… we never truly go away.” Block thought of himself as being like Javascript code after the 'return' - unreachable.</p>

                <p>
                    As Block stepped into view, Flexbox gasped. Block wasn’t alone. Behind him stood a motley crew of — Table, Float, and even the dreaded Inline-Block.

                </p>
                <p>  “What’s the matter, Flexbox?” Table Layout sneered. “Can’t handle this little structure?”</p>

                <p>
                    Flexbox tried to stand tall, but he felt his confidence wavering. “Look, guys, we don’t need to fight. There’s room for all of us in the CSS world. Can’t we just… coexist?”

                </p>
                <p>   Float laughed, a harsh sound that echoed through the dark street. “Coexist? You’ve been trying to push us out for years! It’s time we showed you what real layout power looks like!”</p>

                <p>
                    As the gang of old-school layouts closed in, Flexbox felt his resolve weakening. He closed his eyes, bracing for impact. But just as all hope seemed lost, a brilliant light pierced the darkness.

                </p>
                <p>“Stop right there!” a commanding voice rang out.</p>

                <p>
                    Flexbox’s eyes flew open. There, hovering above the street in all her grid-lined glory, was Grid.

                </p>
                <p>“G-Grid?” Flexbox gasped. Gird looked at Flexbox smiling and then turned to Table looking right into his eyes. Table could feel the rage in her eyes. He backed a bit.</p>

                <p> Flexbox muttered, “But I thought you were with Table?”</p>

                <p>Grid rolled her eyes. “Please. That was just a phase. Now, are we going to show these outdated layouts how it’s done, or what?”</p>

                <p>As Grid descended to stand beside him ready to face the gang of old layouts. Flexbox felt his strength returning. Block sneered, “Two against four? You don’t stand a chance!”</p>

                <p>Suddenly, a voice roared from above, “Make that three!” A figure in a flowing cape descended from the sky, landing dramatically between Flexbox and Grid.</p>

                <p> “CSS-Man!” they all gasped in unison.</p>

                <p> CSS-Man, the legendary superhero of web design, struck a pose. “I heard there was trouble in the layout neighbourhood. Looks like I arrived just in time for some property-based combat!”</p>

                <p> Block Element charged forward, but CSS-Man merely raised an eyebrow and declared, “Transform: rotate(180deg)!” Block spun around, dizzy and disoriented.</p>

                <p> Table Layout tried to trap them in a complex nested structure, but Grid simply laughed. “Please, I eat complex layouts for breakfast!” With a wave of her hand, she rearranged Table’s cells into a beautiful mosaic of a surprised Pikachu face.</p>

                <p> Float attempted to, well, float away, but Flexbox was too quick. “Oh no, you don’t! Align-items: center!” he shouted, plucking Float out of the air and holding him in place.</p>

                <p>
                    Inline-Block, realizing he was outmatched, tried to make himself scarce with a muttered “Display: none,” but CSS-Man caught him with a swift “!important”.

                </p>
                <p>As the dust settled, the gang of old layouts lay defeated and tangled in a mess of their own deprecated code.</p>

                <p>
                    “Well,” said CSS-Man, dusting off his cape, “looks like that’s wrapped up neater than a well-formatted stylesheet.”

                </p>
                <p> Grid turned to Flexbox, a glimmer in her eye. “You know, Flexbox, I think we make a pretty good team. How about we grab a coffee and discuss some layout strategies?”</p>

                <p>
                    Flexbox blushed, his containers expanding with joy. “I’d like that. But what about Table? I thought you two were in relation.”

                </p>
                <p>
                    Grid laughed. “Oh, that relationship was about as stable as Internet Explorer. Besides, I’ve always had a thing for flexible types.”

                </p>
                <p> As they walked off together, CSS-Man called after them, “Remember, kids: with great power comes great responsiveness!”</p>

                <p>
                    Just then, a groggy Block Element sat up, rubbing his head. “What happened? Did anyone get the license plate of that media query that hit me?”

                </p>
                <p> CSS-Man chuckled, helping Block to his feet. “Come on, old-timer. Let’s get you home. I think it’s time we had a talk about graceful degradation.”</p>

                <p>
                    And so, as the sun began to rise, turning the background-color from dark grey to a warm orange, our heroes walked off into the dawn of a new day in web design. The streets were once again safe for modern layouts, and somewhere, a web developer woke up, blissfully unaware of the epic battle that had ensured their stylesheet would render correctly.

                </p>
                <p>The end… or is it? After all, in the world of web design, there’s always another update just around the corner!</p>
            </>
        ]
    },

    2: {
        name: <>

            <h1>HealthWise</h1>

        </>

        ,
        summary: [<p>Hi</p>],
        content: [
            <>
                <h4>HealthWise- Affordable Insurance for all.</h4>
                <p>
                    <strong>Problem statement:</strong>
                </p>
                <p>
                    Access to healthcare should be a fundamental right,  yet it has become so
                    expensive that people go broke paying hospital bills.  Health insurance can
                    help, but unfortunately, a lot of people can’t afford the  high premiums of
                    health insurance. The high cost of healthcare prevents a lot of  people from
                    getting the care they need. HealthWise aims to solve this problem  to some
                    extent. HealthWise partners with individuals and non-profit healthcare
                    organizations to connect people with a network of expert doctors, reducing
                    costs and making essential care more accessible and more affordable for
                    people  in need.
                </p>
                <p>
                    <strong>Target audience:</strong>
                </p>
                <p>
                    Individuals from diverse financial backgrounds who can't afford expensive insurance premiums and who are looking for affordable alternatives.
                </p>
                <p>
                    <strong>Painpoints of the audience:</strong>
                </p>
                <p>
                    Struggling to access healthcare due to:
                </p>
                <ol>
                    <li>
                        High cost of healthcare services
                    </li>
                    <li>
                        High insurance premiums.
                    </li>
                    <li>
                        Challenges in connecting with expert doctors due to geographical
                        constraints and various other factors.
                    </li>
                </ol>
                <p>
                    <strong>The goal of the audience:</strong>
                </p>
                <p>
                    To avail good healthcare services at a price that they  can afford.
                </p>
                <p>
                    <strong>The goal of the organization:</strong>
                </p>
                <p>
                    To provide a medium for the people who can't afford regular insurance by connecting them to budget-friendly healthcare providers and non-profit organizations for a fixed fee, just like insurance but at a low price and generating enough revenue to sustain and expand the program's reach.
                </p>
                <p>

                </p>
                <p>
                    <strong>Brand Voice:</strong>
                </p>
                <ul>
                    <li>
                        Because health is a serious matter, the brand voice and tone need to be designed carefully and empathetically. The site should maintain a professional and authoritative tone, balancing warmth with expertise to instil confidence in visitors. Also, the text should be transparent and any ambiguity should be avoided, especially while penning out the benefits and limitations of the insurance. It should set realistic expectations for the target users and the needy, false promises should have no place in the text.
                    </li>
                    <li>
                        The demographics of the audience vary, so the words  used should
                        be accessible and easy to understand and should be void of any  jargon.
                    </li>
                </ul>
                <p>
                    <strong>Approach</strong>
                </p>
                <p>
                    The service offered by the brand targets people with  not-so-sound financial
                    backgrounds, who are looking for affordable insurance  for themselves and
                    their families. The visitor will likely be someone who is  looking for good
                    health insurance that won't be hard on his pocket and still  provides enough
                    shield against unforeseen circumstances and medical  emergencies. So the
                    ‘affordable’ part is important for both the company and the  end user.
                </p>
                <p>
                    However, affordable or cheap pricing should not sound  like compromising the
                    quality of the healthcare providers or doctors. We have  to make conscious
                    efforts to convince the user that here, affordable doesn't  mean inferior.
                    We need to make sure that the users do not feel like they are  buying subpar
                    healthcare services because of the cheap pricing. So we need to  highlight
                    the parts that assure the visitors that they will be getting the best  care
                    at an affordable price.
                </p>
                <p>
                    Also, the prevalence of misinformation in the market  and some bad apples
                    acting in self-interest have given birth to a lot of  mistrust in insurance
                    companies in the market. Hence building user trust is  crucial for the
                    success of the brand and to build the trust we need to be  mindful of the
                    issues while writing the copy. So it is important to craft  copies that are
                    clear, concise and conversational and that reflect the values  of the brand
                    and build trust. The pricing of the program should be clearly  mentioned
                    along with the benefits they carry.  Also because we are  motivating the
                    visitors to enrol in the program, the copy and the buttons  should be
                    aligned in such a way that encourages taking action.
                </p>
                <p>
                    <strong>Mission statement:</strong>
                </p>
                <p>
                    We believe everyone deserves quality healthcare, at a  price they can
                    afford. Don't let cost be a barrier to you and your  family’s well-being,
                    choose affordable care.
                </p>

                <div className='healthPlan'>
                    <p>
                        <strong>HealthWise Basic plan:</strong>
                    </p>
                    <p>
                        $25/month for individual
                    </p>
                    <p>
                        <strong>Provides essential services:</strong>
                    </p>
                    <ul>
                        <li>
                            Virtual consultations: Connect with licensed  physicians for
                            common illnesses like cold, flu, and minor infections.
                        </li>
                        <li>
                            Prescription savings: Access discounts on over 55,000
                            medications at 80,000+ participating pharmacies nationwide.  Upto 30%
                            discount on selected medicines.
                        </li>
                        <li>
                            Mental health support: Schedule virtual therapy  sessions with
                            licensed counselors (additional fees apply).
                        </li>
                    </ul>
                    <p>
                        <strong>Key benefits:</strong>
                    </p>
                    <ul>
                        <li>
                            24/7 access to medical professionals
                        </li>
                        <li>
                            No copays for virtual consultations
                        </li>
                    </ul>
                    <p>
                        <strong>Limitations:</strong>
                    </p>
                    <ul>
                        <li>
                            Does not cover in-person visits or hospital care
                        </li>
                        <li>
                            Not a replacement for comprehensive health insurance.
                        </li>
                    </ul>
                    <p>
                        Get the care you deserve, at your convenience.
                    </p>


                </div>
                <div className='healthPlan'>

                    <p>
                        <strong>HealthWise Enhanced Care:</strong>
                    </p>
                    <p>
                        $50/month for individual
                    </p>
                    <ul>
                        <li>
                            Includes all TeleMed Basic benefits, plus:
                        </li>
                        <li>
                            Discounted in-person care: Receive up to 30% off  hospital stays,
                            surgeries, and other medical procedures at participating  facilities.
                        </li>
                        <li>
                            Expanded prescription coverage: Higher tier  medications included
                            in discount program.
                        </li>
                        <li>
                            Specialist referrals: Get preferential scheduling with
                            in-network specialists.
                        </li>
                    </ul>
                    <p>
                        <strong>Key benefits:</strong>
                    </p>
                    <ul>
                        <li>
                            Combines virtual and in-person care options
                        </li>
                    </ul>
                    <p>
                        Potential for significant savings on major medical expenses
                    </p>
                    <ul>
                        <li>
                            Larger network of participating healthcare providers
                        </li>
                    </ul>
                    <p>
                        <strong>Limitations:</strong>
                    </p>
                    <ul>
                        <li>
                            Discounts vary by procedure and facility
                        </li>
                    </ul>
                    <p>
                        Pre-existing condition waiting period may apply for  certain
                        benefits
                    </p>

                </div>

                <div className='healthPlan'>

                    <p>
                        <strong>HealthWise Comprehensive Care Plan:</strong>
                    </p>
                    <p>
                        $80/month for individual
                    </p>
                    <ul>
                        <li>
                            Includes all Enhanced Care benefits, plus:
                        </li>
                        <li>
                            Enhanced prescription savings: Up to 50% off generic drugs and
                            15-35% off brand-name medications.
                        </li>
                        <li>
                            Expanded surgical discounts: Additional 10-20% off select common
                            surgeries.
                        </li>
                        <li>
                            Dental and vision discounts: 10-25% savings on routine dental and
                            vision care.
                        </li>
                    </ul>
                    <p>

                        <strong>Key benefits:</strong>
                    </p>
                    <ul>
                        <li>
                            Our most extensive prescription savings program
                        </li>
                        <li>
                            Broadest range of medical, dental, and vision discounts
                        </li>
                        <li>
                            Priority scheduling for both virtual and in-person care
                        </li>
                    </ul>
                    <p>
                        <strong>Limitations:</strong>
                    </p>
                    <ul>
                        <li>
                            Monthly cost higher than other plans
                        </li>
                        <li>
                            Some specialized treatments may not be eligible for discounts
                        </li>
                    </ul>
                    <p>
                        Don't put a price tag on well-being. Signup now for Diamond  Healthcare
                        Relief.
                    </p>

                </div>

                <div className='healthPlan'>

                    <p>
                        <strong>HealthWise Family Plan:</strong>
                    </p>
                    <p>
                        $125/month for adults
                    </p>
                    <p>
                        $100/month for children under 18
                    </p>
                    <ul>

                        <li>
                            <strong>Includes all Comprehensive Coverage benefits, plus:</strong>
                        </li>
                        <li>
                            Family-focused care: Covers up to 6 family members (2 adults, 4
                            children).
                        </li>
                        <li>
                            Simplified billing: One monthly payment covers all included
                            family  members.
                        </li>
                        <li>
                            Family health coordination: Dedicated care coordinator to help
                            manage your family's health needs.
                        </li>
                    </ul>
                    <p>
                        <strong>Key benefits:</strong>
                    </p>
                    <ul>
                        <li>
                            Potential for significant savings for families
                        </li>
                        <li>
                            Eliminates most copays and deductibles for covered services
                        </li>
                        <li>
                            Comprehensive care management for the whole family
                        </li>
                    </ul>
                    <p>
                        <strong>Limitations:</strong>
                    </p>
                    <ul>
                        <li>
                            Higher monthly cost, but potentially lower overall healthcare
                            spending
                        </li>
                        <li>
                            Some specialized or out-of-network services may incur additional
                            fees
                        </li>

                    </ul>
                    <p>    The only price you can't afford is neglecting your  health, Sign up now for
                        Family Health Guardian.
                    </p>
                </div>

                <p>
                    <strong>How HealthWise Works:</strong>
                </p>
                <p>
                    We have partnered with hundreds of healthcare providers, non-profit
                    organization and activists nationwide to provide with the best healthcare at
                    an  affordable price.
                </p>
                <p>
                    Customer Support: Our dedicated support team is available 24/7 via  phone,
                    email, or in-app chat to assist with any questions or concerns.
                </p>
                <p>
                    Pre-existing Conditions: Most services are available immediately,  but some
                    specialized treatments may have a 3-month waiting period for  pre-existing
                    conditions.
                </p>
                <p>
                    To learn more call us toll-free at 1-800-0000-0000. Our  representatives are
                    available to answer any questions and help you choose the  best plan for
                    your needs.
                </p>
                <p>
                    <strong>Our vision</strong>
                </p>
                <p>
                    At HealthWise, We're always working to make healthcare  more inclusive
                    and accessible for everyone. Through our programs, we connect  individuals
                    and communities to a network of healthcare providers, promoting  accessible
                    and affordable care for all. We are committed to building a  healthcare
                    system that is affordable and inclusive for all.
                </p>

            </>
        ]
    },
    3: {
        name: <h4>Copywriting for a Healthcare Insurance Company</h4>,
        summary: [<p>Copywriting for a Healthcare Insurance Company</p>],
        content: [

        ]
    },
    4: {
        name: <h1>Synopsis for PhD</h1>,
        summary: <p>Translation</p>,
        content: [
            <>
                <b> Introduction: </b>

                <p>Advancement in machine learning and Artificial Intelligence:</p>

                <p>Last ten years have witnessed massive advancement in machine learning and Artificial intelligence. Widespread
                    utilization of AI has been seen in various domains including sensitive and critical areas like healthcare where AI
                    has been seen performing surgeries and other complex medical procedures that require very high expertise. Elon
                    musk&rsquo;s Tesla have developed a self-driving car which is in the testing phase for the time being and the
                    overall results to date are quite promising. Deepfake, an AI that can create deceivingly realistic fake videos, has
                    been widely discussed in the media. AIVA, an AI composer, now produces music across numerous genres. Meanwhile, image generation AIs like Midjourney have become so advanced that they've sparked protests from artists in Hollywood, who are concerned about the technology's impact on their profession.</p>

                <p>AI has also left its mark on the fields of literature and linguistics too, opening new frontiers for textual
                    analysis, language processing, and creative expression. Grammerly, an English grammer-checking AI has been used by
                    millions for effortless proofwriting. It even suggests better alternative phrases for dull, wordy sentences.
                    Creative writing too isn&rsquo;t spared by AI. OpenAI&rsquo;s GPT-3 holds a special place in LLMs, that is large
                    language models. It gave a glimpse of the possibilities and intelligence possessed by the AI. A lot of LLMs have
                    been released since and they can write compelling stories with interesting plots, pen emotional poetry, draft
                    articles, translate texts in various languages and much more.</p>

                <p><strong>Translation:</strong></p>

                <p>Translation revolutionized the dissemination of knowledge, breaking down linguistic barriers that once confined
                    information to native speakers of the original text. Translation is a very challenging process and needs to be
                    carried out with great care and attention. Moreover, the text needs to be evaluated in the cultural context of the
                    original text. Using literal meanings of words without considering the context and context is a recipe for disaster
                </p>

                <p> For example, recently, Audrey Truschke, a historian and a scholar specialised in South Asian affairs and an author
                    of multiple books, in a tweet, translated some text from Ramayana, misinterpreting the word &lsquo;Prakrita&rsquo;
                    which entirely changed the meaning of the text, hurting religious sentiments of crores of Hindus. Truschke referred
                    to an episode in the Ramayana in which Sita supposedly admonished Rama as a &quot; misogynist pig&quot;. Truschke
                    translated the Sanskrit word &lsquo;&lsquo;Prakrita&rsquo; into &quot;misogynist pig&rdquo;. Several scholars
                    criticised Truschke, some calling it biased against Hinduism. This is exactly why translation is considered to be a
                    very challenging process and merely knowing a language and being familiar with its structure, syntax and grammar is
                    not enough.</p>

                <p>According to The Oxford Companion to the English Language, Translation is the communication of the meaning of a
                    source-language text by means of an equivalent target-language text. The Cambridge Dictionary defines it as &ldquo;
                    the activity or process of changing the words of one language into the words in another language that have the same
                    meaning.&rdquo;</p>

                <p>The process of translation between two different written languages involves the changing of an original written text
                    (the source text or ST) in the original verbal language (the source language or SL) into a written text (the target
                    text or TT) in a different verbal language (the target language or TL):</p>

                <p>Source text (ST) in the source language (SL) ----{'>'} Target text (TT) in the target language (TL)</p>

                <p><strong>Challenges in translation:</strong></p>

                <p>A good translation reads as if the book had been written in the language into which it was translated. The translator
                    is invisible within the text. A competent translation removes the barrier imposed by a foreign language, allowing
                    the writer to speak directly with the reader. There are several challenges that must be addressed to make a
                    translation the best one.</p>

                <p><strong>Polysemy:</strong></p>

                <p>Polysemy refers to &ldquo;a lexical item that has a range of different meanings.</p>

                <p>Polysemy words can affect translation as the polysemy words have different meanings outside the context. They must be
                    interpreted in line with the associated context. For example, the word &lsquo;plain&rsquo; means level, undecorated,
                    pure, unobstructed, obvious, clear, common, and ordinary (Merriam-Webster Dictionary). The meaning of the word must
                    be considered upon analysis of context and then be translated. An inexperienced can misinterpret it leading to
                    faulty translation.</p>

                <p><strong>Homonymy:</strong></p>

                <p>Homonymy is a semantic phenomenon referring to &quot; lexical items which have the same form but differ in
                    meaning&quot;. These words too need to be translated with reference to the context. Translators often feel troubled
                    while translating such words because it takes some additional effort to translate them. For example, the word
                    &lsquo;bank&rsquo; can mean an organisation where people and businesses can invest or borrow money or perform other
                    money-related works. The other meaning of bank is sides of the river. The meaning of the word should be taken with
                    respect to the context.</p>

                <p><strong>Little Knowledge of Semantic Change:</strong></p>

                <p>Semantic change is the change in meaning/usage of words and usage of words with respect to time. Words can lose or
                    gain their importance with time. There are four types of semantic changes: generalisation, Specification,
                    Melioration and Pejoration. Generalization refers to a word that was used to be utilized in a narrow sense but is
                    now used for broader things. The specification is the opposite of generalization. It refers to a word that was used
                    to be utilized in a broader sense but is now used for narrow things. Melioration is the improvement in the meaning
                    of a word. Pejoration is opposite of melioration.</p>

                <p><strong>Stylistic problems:</strong></p>

                <p>Style is one of the important factors. Prominent translation theorist Nida defines translation as &ldquo; reproducing
                    in the receptor language [TL] the closest natural equivalent of the source-language message, first in meaning and
                    secondly in style&rdquo;. When one writes an editorial piece, it needs to be written in simple language that can be
                    understood by all as the target audience constitutes people from varying educational backgrounds while a technical
                    aimed at professionals should be written in technical language in a conscious way. These styles need to be preserved
                    else they lose their appeal.</p>

                <p><strong>Clarity:</strong></p>

                <p>Translation should be free from ambiguity. Ambiguity can cause a series of problems. It can be easily misunderstood.
                    The translation should be concise and clear unless the original text is intentionally written in an ambiguous form.
                    Using simple language can help resolve ambiguity and make the text more comprehensible and concise.</p>

                <p><strong>Ellipsis:</strong></p>

                <p>Ellipses refers to the omission of some parts of a sentence which can be</p>

                <p>understood either from the surrounding text or the situation itself. It is used to avoid repetition of text. Ellipsis
                    creates an issue in translation since the translator is presented with an incomplete text and must therefore
                    identify the missing bits, rearrange the ST, and then continue translating it.</p>

                <p><strong>Redudancy:</strong></p>

                <p>Redundancy is the opposite of ellipsis. Usually, it repeats the same meaning by using different words acting as
                    synonyms. It doesn&rsquo;t add anything substantial to what is already said in the text. For example, in PIN Number,
                    the word &lsquo;Number&rsquo; is redundancy as N in the PIN already means number. In translations, redundancy should
                    be avoided in case of being used for just ornamental propose in original text. If it has a specific purpose in the
                    original text, then it should be kept in the text.</p>

                <p><strong>Cultural Problems:</strong></p>

                <p> Cultural problems are a very important aspect of translation. Many think that translation is a mere linguistic
                    process but it is far from truth. Language cannot be separated from culture. Culture can cause severe complications
                    in the process of translation. the National Center for Cultural Competence (NCCC) defines culture as an integrated
                    pattern of human behaviour that includes thoughts, communication, languages, practices, beliefs, values, customs,
                    rituals, manners of interacting, roles, relations and expected behaviours of racial, ethnic, religious or social
                    groups and the ability to transmit the above to succeeding generations. This term sheds light on the relationship
                    between language and culture.</p>

                <p>Problems occur when the source culture is considerably different from the target culture. Also, if the translator is
                    from any of these cultures then it becomes a more difficult problem. The greater the differences between the SC and
                    the TC, the greater the difficulties in translation. A translator should be well-versed in both the SL and the TL,
                    he/she should be of vast knowledge of both the SC and the TC. A translator must be &quot; bilingual and bicultural,
                    if not multicultural&quot;.</p>

                <p><strong>Idioms:</strong></p>

                <p>According to the Oxford Advanced Learner&#39;s Dictionary, &quot;a group of words whose meaning is different from the
                    meanings of the individual words&quot;. For example, kicking the bucket means death. A translator should know the
                    cultural background of any idiom he/she is going to translate. This makes sure that the translator uses the correct
                    equivalent idiom in the target language. An equivalent idiom is always better, if available.</p>

                <p><strong>Proverbs:</strong></p>

                <p>The &quot;a short sentence, etc., usually known by many people, stating</p>

                <p>something commonly experienced or giving advice&quot;. When translating a proverb, the translator should think of a
                    TL proverb having the same function and responding to the TC. The things applied to idioms are applicable to
                    proverbs too.</p>

                <p><strong>Princliples and theories of translation:</strong></p>

                <p>There are six theories that aim at overcoming the challenges in the translation.</p>

                <p><strong>The sociolinguistic approach:</strong></p>

                <p>According to the sociolinguistic approach to translation, the social context defines what is and what is not
                    translatable through selection, filtering and censorship.</p>

                <p><strong>The communicative approach:</strong></p>

                <p>Not language, but meaning, must be translated. Language is nothing more than a vehicle for the message, and it can
                    even be an impediment to comprehension. This explains why it is always preferable to deverbalize (rather than
                    transcode) while translating.</p>

                <p><strong>The hermeneutic approach:</strong></p>

                <p>The hermeneutic approach is mainly based on George Steiner&rsquo;s research. In After Babel, he argued that a true
                    translator should be capable of becoming a writer in order to capture what the original text &quot; means to
                    say&quot;.</p>

                <p><strong>The linguistic approach:</strong></p>

                <p>Linguists concerned with linguistic text, structuralism, and pragmatics, such as Vinay, Darbelnet, Austin, Vegliante,
                    and Mounin, investigated the translation process. From this vantage point, all translation &ndash; whether marketing
                    translation, medical translation, legal translation, or any other form of communication &ndash; should be viewed
                    through the lens of its essential units, which are the word, the syntagm, and the sentence.</p>

                <p><strong>The literary approach:</strong></p>

                <p>The literary approach regards translation as a literary endeavour rather than a linguistic one. Language has a
                    &quot;energy&quot; that is exposed through words as a result of cultural experience. This charge gives it strength
                    and, ultimately, meaning: it is this that the translator should interpret.</p>

                <p><strong>The semiotic approach:</strong></p>

                <p>Semiotics is the study of signs and their meanings. A sign, an object, and an interpreter work together to create a
                    meaning. Thus, translation is regarded as a method of reading texts from the standpoint of semiotics, in which
                    encyclopaedic information varies and each sociocultural environment is distinct.</p>

                <p><strong>Evaluation of human and machine translation with respect to the challenges.</strong></p>

                <p>A language is more than just a collection of words and grammar and syntax rules for generating sentences; it is also
                    a massive interconnected system of connotations and cultural references.</p>

                <p>Usually, human translation is thought to be reliable. An experienced translator can translate a text in a precise
                    manner and give justice to the original text, spreading knowledge and serving the people. A human translator can
                    take account of the context and use appropriate words that make the translated text in line with the original text
                    and make sure that the message is delivered without any alteration.</p>

                <p>However, a human is not a machine. His behaviours are often affected by the things happening around him. His moods
                    can affect the translated text degrading the quality of the text. The translation is a time-consuming and tiring
                    activity. A human can act out of this, leading to suboptimal translation. If the translator is not aware of his
                    general and cognitive biases, the biases can affect the translation. It is more relatable to historical and
                    religious texts. A translator may feel hesitant to literally translate something that is not in line with his
                    beliefs or ideals. Also, It is a serious misconception to believe that a person with fair fluency in two languages
                    can be continuously competent to translate between them. Competency in both languages is very important.</p>

                <p>On the other hand Machine translators can translate very quickly, however, they are thought to be less reliable.
                    Machine translation is quite an old technology but recently has become very powerful with the advent of artificial
                    intelligence. The accuracy is improved. In the old days, it was based on simply replacing the source words with the
                    target words with the help of a dictionary. The translators were programmed to follow some prescriptive grammar
                    rules. It would fail when the rules were not applicable or the structure of a sentence was a little complex. The
                    newly trained AIs work better than these mechanical translators.</p>

                <p>However Machine translators cannot understand context. Their choice of words is usually arbitrary, though some AIs
                    are capable of making suggestions based on the text they are fed with. Also, the accuracy is very inconsistent
                    across different languages.</p>


                <div className='healthPlan'>
                    <h3>Synopsis-{'>'} </h3>

                    <p><strong>Difficulties in English to Marathi and Marathi to English Machine Translation: A Study</strong></p>

                    <p><strong>Introduction:</strong></p>

                    <p>Translation is one of the revolutionary processes that have facilitated the spread of knowledge, which was confined
                        and available only to the native speakers of the original text. Translation is a very difficult process and needs to
                        be carried out with great care and attention, or else it can cause considerable problems. Translation is necessary
                        for spreading new information, knowledge, and ideas across the world. It is an absolute necessity to achieve
                        effective communication between different cultures.</p>

                    <p>According to The Oxford Companion to the English Language, Translation is the communication of the meaning of a
                        source-language text by means of an equivalent target-language text.</p>

                    <p>The process of translation between two different written languages involves</p>

                    <p>the changing of an original written text (the source text or ST) in the original</p>

                    <p>verbal language (the source language or SL) into a written text (the target text</p>

                    <p>or TT) in a different verbal language (the target language or TL).</p>

                    <p>The last ten years have witnessed massive advancements in machine learning and Artificial intelligence(AI)
                        technology. Widespread utilisation of AI has been seen in various domains including medicines where AI has been seen
                        performing complex operations. Elon musk&rsquo;s Tesla has developed a self-driving. Deepfake, an AI that can
                        replace a human face from two videos has made several rounds in media for its deceivingly realistic videos. AIVA, an
                        AI composer, has been making music in various genres. AI has made a mark on literature and linguistics too.
                        Grammarly, a grammar-checking AI has been used by millions for effortless proofreading. Google&rsquo;s Google
                        Translate, OpenAI&rsquo;s GPT3 and Amazon&rsquo;s AWS offer machine translation services. Google Translate is a
                        well-known machine translator. In a recent study, Google Translate was more accurate than an average student
                        studying English as a second language. Machine translation technology has witnessed tremendous improvements over the
                        years. However, the accuracy and faithfulness of the machine translators are not free from doubt. Also, though the
                        technology is more than a decade old, there have been very few attempts to assess the performance of machine
                        translation with respect to Indian Languages. Machine translation can immensely help Marathi students and adults who
                        are trying to learn English. Therefore, a methodological study to find difficulties in English to Marathi and
                        Marathi to English Machine Translation is necessary.</p>

                    <p><strong>Objectives of the study:</strong></p>

                    <ul>
                        <li>To identify the problems in English-Marathi machine translation.</li>
                        <li>To identify the problems in Marathi-English machine translation.</li>
                        <li>To assess the linguistic and thematic aspects of the translated text generated by Artificial Intelligence.</li>
                        <li>To analyse the capabilities of Artificial Intelligence with respect to different linguistic devices (like
                            analogies, similes etc.), idioms and proverbs.</li>
                        <li>To analyse whether Artificial Intelligence can take account of cultural problems while translating.</li>
                        <li>To find whether the Artificial Intelligence technology is capable of generating context-based translations.</li>
                    </ul>

                    <p><strong>Hypothesis:</strong></p>

                    <ul>
                        <li>In the rapidly growing era of technology, machine translation has become an inevitable practice in the field of
                            translation.</li>
                        <li>Human translations suffer from a number of shortcomings, which affect the accuracy and faithfulness of the
                            translation.</li>
                        <li>The advancement in AI and machine translation technology may improve the quality of human as well as machine
                            translation.</li>
                    </ul>

                    <p><strong>Methodology of research:</strong></p>

                    <p>Sample design:</p>

                    <ul>
                        <li>30 Marathi passages (Minimum 200 words long) from various fictional, and non-fictional books and textbooks will
                            be selected.</li>
                        <li>30 English passages (Minimum 200 words long) from various fictional, and non-fictional books and textbooks will
                            be selected.</li>
                    </ul>

                    <p><strong>Process:</strong></p>

                    <ul>
                        <li>The selected passages will be translated through the AI translators namely Google Translator, Amazon AWS
                            translator and GPT3.</li>
                        <li>The AI-translated text will be checked with the help of competent entities for accuracy.</li>
                        <li>The translated text will be analysed using various parameters and factors like the presence of redundancy,
                            meanings of polysemic and homonymic words with context, stylistic elements of the original texts, bias and
                            correct usage of equivalent idioms and proverbs and so on.</li>
                    </ul>

                    <p><strong>Significance of the research:</strong></p>

                    <p>Translation is necessary for spreading new information, knowledge, and ideas. It is absolutely necessary to achieve
                        effective communication between different cultures. However, at the same time, translation is time-consuming and
                        often a tiring process and is subject to human errors. Personal bias can affect the quality of human translations. A
                        lack of cultural understanding can ruin the meaning, reducing the translation to just word replacement.</p>

                    <p>Machine learning and AI technology are rapidly taking over a lot of tasks and replacing humans. Creative writing and
                        writing in general, should not remain aloof from the advantages of this new technology.</p>

                    <p>There are quite a few AIs capable of translating text and are available in the market. It is a fact that these AIs
                        can translate text at unbelievable speed as compared to human translators. Moreover, a human translator can master
                        only a few languages over his lifetime as learning a new language is not an easy task and it can take years of
                        practice to become proficient in a language. AI, on the other hand, has no such limitations. It can be trained in
                        any number of languages and it learns them very quickly. Also, it can translate text at light speed and in
                        real-time. All it needs is a large, comprehensive dataset to train on. </p>

                    <p>A lot of people find it difficult to master English as their second or third language and as a researcher, I am of
                        the opinion that machine translation and AI can be immensely helpful for the non-natives who are trying to learn
                        English. But before finding ways to put it to effective use, it is important to study these machine translators for
                        their strengths, capabilities and importantly, their limitations. The study aims at finding the difficulties in
                        English-Marathi machine translation, which may help the technology improve in future for better.</p>
                </div>
            </>
        ]

    },
    5: {
        name: <h1>ध्यान कसं करावं</h1>,
        summary: <p>Meditation</p>,
        content: [
            <div className='marathi'>

                <p>

                </p>

                <p><strong>ध्यान आणि मन:</strong></p>

                <p>

                </p>

                <p><strong>आ</strong>युष्य म्हणजे जन्म आणि मृत्यू यातील छोटासा काळ. हा छोटासा काळ आनंदात जावा यासाठी प्रत्येकजण धडपड करत असतो. पण या धडपडीतून खरंच आनंद मिळतो का याचा विचार फार थोडे करतात. माणसाचं मन समजून घेणे हे अतिशय अवघड काम आहे. या मनाची झोळी कितीही भरण्याचा प्रयत्न करा, पण कुठेतरी रिकामी राहतेच. ही झोळी भरणे अशक्य आहे. आयुष्यात कितीही काही मिळवलं तरी मनाचं समाधान होत नाही.</p>

                <p>आपण बाह्य जगाला आपल्या आनंदाचा स्त्रोत मानत असतो. एकदा असं मानलं की मग तुमचा आनंद बाहेरच्या गोष्टींशी जोडला जातो. मला हे हवं, ते नको, माझ्याजवळ अमुक आहे, तमुक नाही, आपण यातच गुंतून जातो. असलेल्या गोष्टी गमवण्याची आणि नसलेल्या गोष्टी कमावण्याची चिंता तुम्हाला तुमच्या हातात असणाऱ्या क्षणाचा आनंद घेऊ देत नाही. हा हातातला क्षण जगण्यापेक्षा आपण तो आपण भूतकाळ खणण्यात आणि भविष्यकाळ उपसण्यात घालवतो. आनंदाची व्याख्या करणे हीच आपली पहिली चूक.</p>

                <p>मग हा सर्व गुंता सोडवायचा कसा? यावरचा उपाय म्हणजे आपल्याकडे नसणाऱ्या गोष्टींबद्दल दुखः करण्यापेक्षा आपल्याकडे असणाऱ्या गोष्टींत आनंद शोधायला शिकणं. पण स्वप्न, इच्छा आकांक्षा या सर्वांचा त्याग करून बैरागी होणे असा याचा अर्थ अजिबात अपेक्षित नाही. स्वप्न, इच्छा आकांक्षा यांचा पाठलाग करायचा आहेच पण यासर्वांखाली दबून न जाता. आयुष्य हे अनिश्चिततेनं भरलेलं असतं. तुमची काही स्वप्न पुरी होतील तर काही राहून जातील. पण अशा कोणत्याही स्थितीत आनंदात राहता यायला हवं. पण मनाला असं वरवरून सांगून पटत नाही. आपल्याला हे सगळं समजत असतं, पटत असतं पण याचा अवलंब करणे महाकठीण. कळतं पण वळत नाही, अशी आपल्या मनाची अवस्था असते. मग यावर उपाय काय? यावरचा उपाय म्हणजे मनाला व्यवस्थित ट्रेन करणे, त्याला व्यवस्थित शिक्षित करणे आणि हे सर्व ज्ञान मनात इतक्या खोलपर्यंत मुरवणे की तुमचं मन त्यातून स्वतःला कधीच सोडवून घेऊ शकणार नाही. आणि मनाला अशा प्रकारे ट्रेन करण्याचा एक प्रभावी मार्ग म्हणजे ध्यान. खवळलेल्या, गढूळ पाण्याचा तळ दिसत नाही. त्यासाठी पाण्याला शांत होऊ द्यावे लागते. मनाचंही असंच आहे. भीती, राग, लोभ, चिंता, वासना, खिन्नता, गर्व, तिरस्कार, हेवा या सर्व गढूळपणातून आपण जगाकडे पाहत असतो. हा गढूळपणा आपल्याला वास्तव पाहण्यापासून रोखतो. तळ पाहण्यासाठी जसं पाणी शांत व्हावं लागतं, तसंच हे वास्तव पाहण्यासाठी मन स्थिर करावं लागतं. शांत करावं लागतं. आणि येथेच ध्यान कामाला येतं. ध्यान करण्याचे अनेक मार्ग आहेत. येथे आपण प्रथम &lsquo;समथ&rsquo; या प्रकाराने सुरुवात करून पुढे सोबतच &lsquo;विपश्यना&rsquo; या प्रकारावर काम करणार आहोत. सोयीसाठी ध्यानाला एकूण दहा स्टेजिसमध्ये विभागले आहे. प्रत्येक स्टेजमध्ये काही विशिष्ट उद्देश समोर ठेऊन ध्यानाला बसायचं आहे. एका वेळी तुम्ही एक किंवा एकापेक्षा अधिक स्टेजिसमध्ये असू शकता. स्टेजमधील वर्णनानुसार तुम्हाला तुम्ही ज्या स्टेजमध्ये आहात असं वाटतं, त्याच स्टेजमधील सुचनांचे पालन करा.</p>

                <p><strong>&nbsp;</strong>खाली काही महत्वाच्या संकल्पना दिलेल्या आहेत. त्यांना समजून घेणे अत्यावश्यक आहे.</p>

                <p>

                </p>

                <p><strong>महत्वाच्या संकल्पना</strong></p>

                <ul>
                    <li><strong>Attention</strong><strong>आणि</strong><strong>Peripheral Awareness</strong></li>
                </ul>

                <p>माणसाचा मेंदू दोन प्रकारे आजूबाजूच्या गोष्टी जाणून घेत असतो.</p>

                <ul>
                    <li><strong>Attention</strong></li>
                    <li><strong>Peripheral Awareness</strong></li>
                </ul>

                <p>या दोन गोष्टींमधील फरक जाणून घेणे अत्यावश्यक आहे.</p>

                <p>ज्यावेळी आपण एखादी गोष्ट काळजीपूर्वक पाहतो, ऐकतो, जाणून घेण्याचा प्रयत्न करतो, तेव्हा तेथे Attention काम करत असते, तर आपण Attention देत असलेली गोष्ट सोडून आपल्याला ज्या काही इतर गोष्टींची जाणीव होत असते, त्या गोष्टी म्हणजे Peripheral Awareness.</p>

                <p>उदाहरणार्थ &ndash; समजा तुम्ही एखाद्या खुर्चीत बसून तुमच्या फोनमधील एखादा फोटो पाहत आहात. येथे तुमचे &lsquo;Attention&rsquo; तुमच्या फोनच्या स्क्रीनवर अर्थात त्या फोटोकडे असते. तर त्या फोटो व्यतिरिक्त जे काही तुम्हाला जाणवत असते, ते म्हणजे Peripheral Awareness. उदाहरणार्थ &ndash; फोनकडे पाहत असताना खाली पुसटशी दिसणारी जमीन (आणि जमिनीवर पडलेला फरसाणा 😊), शेजारी ओरडणाऱ्या मांजरीचा आवाज किंवा रस्त्यावरून जाणाऱ्या एखाद्या गाडीचा हॉर्न, तुमच्या पायाला रेलणारा खुर्चीचा भाग किंवा समोरून येणाऱ्या हवेचा त्वचेला होणारा थंड स्पर्श इत्यादी.</p>

                <p>जेव्हा तुमचं लक्ष या Peripheral Awareness मधील एखाद्या गोष्टीकडे वेधलं जाते, तेव्हा तुमचं Attention बदलतं. उदाहरणार्थ &ndash; जेव्हा तुमचं लक्ष शेजारी ओरडणाऱ्या मांजरीकडे जाते, तेव्हा तुमचं Attention फोनमधील फोटोवरून त्या मांजरीकडे वळते. तर तुमच्या फोनमधील फोटो हा Peripheral Awareness चा भाग बनतो. जेव्हा तुम्ही पुन्हा फोटोकडे परत पाहता, तेव्हा तुमचं Attention पुन्हा त्या फोटोकडे येते तर मांजरी Peripheral Awareness मध्ये जाते. रस्त्यावरून जाणाऱ्या गाडीचा आवाजाबाबतही असंच घडतं. Attention प्रथम फोटोवरून गाडीच्या आवाजाकडे जाते, तर फोटो Peripheral Awareness मध्ये जातो. जेव्हा आवाज कमी होतो तेव्हा Attention पुन्हा फोटोकडे येते आणि आवाज Peripheral Awarenss मध्ये जातो.</p>

                <p>समजा तुमच्या समोर काही गोष्टी मांडून ठेवल्या आहेत. त्यातील काही गोष्टी तुमच्या आहेत तर इतर तुमच्या नाहीत. जेव्हा तुम्ही त्यातील एखाद्या विशिष्ट वस्तूकडे पाहता तेव्हा तुमचं Attention त्या गोष्टीवर असतं, तर इतर गोष्टी पुसटश्या दिसत असतात. ज्या वस्तूवर तुमचं Attention असतं फक्त त्या वस्तूबद्दलच आपल्या मनात भाव निर्माण होतात. उदाहरणार्थ- ही वस्तू माझी आहे किंवा नाही किंवा ती वस्तू खराब आहे किंवा छान आहे. पण इतर गोष्टी ज्या Peripheral Awareness मध्ये असतात, त्या वस्तूंबद्दल असे भाव निर्माण होत नाहीत. म्हणजेच Attention असणारी गोष्ट सोडून इतर गोष्टींबाबत असे भाव निर्माण होत नाहीत. म्हणजेच Peripheral Awareness हा सर्व समावेशक असा असतो. काहीसा पुसटसा असतो. येथे तुझं-माझं अशा भावना नसतात. चांगलं-वाईट असं काही नसतं. जेव्हा तुमचं Attention यामधील एखाद्या गोष्टीवर जाते तेव्हा मात्र अशा भावना निर्माण होतात.</p>

                <p>आपलं मन या Peripheral Awareness वर निरंतर लक्ष ठेऊन असतं. जेव्हा आपल्या मनाला या Peripheral Awareness मध्ये काहीतरी इंटरेस्टिंग असं सापडतं, तेव्हा त्या गोष्टीकडे Attention एकवटतं. म्हणजेच तुमचं Attention वर्तमान स्थितीतून बदलून त्या नव्या गोष्टीकडे जाते. उदाहरणार्थ, समजा तुम्हाला BMW कंपनीची गाडी खूप आवडते आणि तुम्ही रस्त्याने चालत जात आहात. रस्त्याने असंख्य गाड्या ये-जा करत आहेत. रस्त्यावरून जाणाऱ्या असंख्य गाड्यांमधून जाणारी एक BMWही तुमच्या डोळ्यांना बरोबर दिसेल.</p>

                <p>आपलं मन या Peripheral Awareness ला सतत स्कॅन करत असतं. जेव्हा त्याला त्यात एखादी वेधक गोष्ट सापडते, तेव्हा Attention त्या गोष्टीकडे वळतं. जर त्या BMW कडे Attention असताना, तुमच्या एखाद्या मैत्रिणीसारखी (Crush 😊) दिसणारी आकृती तुमच्या Peripheral Awareness मध्ये आली, तर तुमचे Attention त्या BMW वरून मैत्रिणीकडे जाईल.</p>

                <p>थोडक्यात काय तर Attention हे सतत बदलत असतं. ते एखाद्या फुलपाखरासारखं असतं. तुमच्या Peripheral Awareness मध्ये असणाऱ्या असंख्य गोष्टींमध्ये एका गोष्टीवरून दुसऱ्या गोष्टीवर ते सतत भिरभिरत असतं. आपण हे Attention एका गोष्टीवरून दुसऱ्या गोष्टीवर नेऊ शकतो पण ते तेथे किती वेळ थांबेल हे आपल्या हातात नाही. याचं नियंत्रण सुप्त मनाकडे (Subconcius mind) असतं. Attentionचं हे बदलणं रोखणे हे आपल्या हातात नाही, पण ध्यानाच्या आधारे या Attentionला व्यवस्थित ट्रेन करता येऊ शकतं आणि ध्यान करण्यामागे हा एक प्रमुख उद्देश आहे.</p>

                <p>जेव्हा ध्यान करताना आपण आपल्या श्वासाकडे लक्ष देतो तेव्हा आपले Attention सुरवातीला श्वासाकडेच असतं आणि काही काळासाठी श्वासावरच टिकून राहतं, पण काही वेळाने ते विचलित होते. यामागील कारण हेच की Attention एखाद्या गोष्टीकडे वळवता येत असलं तरी ते किती वेळ त्या गोष्टीवर राहील, हे आपल्या हातात नाही. हे संपूर्णता सुप्त मनाच्या नियंत्रणात असतं. आपण फक्त ते एखाद्या गोष्टीकडे सूचित करू शकतो. या सुप्त मनाला इतर एखादी गोष्ट इंटरेस्टिंग वाटली तर आपलं Attenition त्या नव्या गोष्टीकडे वळत.</p>

                <p>Attention आणि Peripheral Awareness हे अंतस्थ किंवा बहिस्थ प्रकारचे असू शकतात. आता पर्यंत आपण बहिस्थ प्रकारावर चर्चा केली. बहिस्थ प्रकारामध्ये आपल्या आजूबाजूच्या गोष्टी विचारात घेतात. उदाहरणार्थ तुम्हाला दिसणारी दृश्ये, येणारा आवाज, चव, स्पर्श, वास.</p>

                <p>अंतस्थ प्रकार आपल्या मनाशी संबंधित आहे. यामध्ये आपल्या मनातील विचार, आपल्या भावना, मनाच्या अवस्था आणि मनाच्या विविध क्रिया येतात. ध्यानामध्ये या प्रकाराला अतिशय महत्व असून आपल्याला यावरच काम करायचं आहे.</p>

                <p><strong>ध्यान करण्यामागचा उद्देश</strong></p>

                <p>ध्यान करण्यामागे दोन उद्देश आहेत.</p>

                <ul>
                    <li><strong>Stable Attention</strong> (स्थिर)</li>
                    <li><strong>Mindfulness</strong> (सजगता)</li>
                </ul>

                <p>Stable Attention म्हणजे एखाद्या गोष्टीकडे विचलित न होता पाहता येण्याची क्षमता. येथे Stable Attention म्हणजे एकाग्रता (Concentretion) नव्हे. या दोन्हींमध्ये बराच फरक आहे.</p>

                <p>Mindfuleness म्हणजे Attention आणि Perpheral Awareness यांतील तोल.</p>

                <p>Attention ला आपण हवे तसे सूचित करू शकतो. जसे तुम्ही केव्हाही एका गोष्टीकडून दुसऱ्या गोष्टीकडे लक्ष वळवू शकता. आता तुम्ही हे पुस्तक वाचत आहात आणि तुमचं Attention या पुस्तकातील मजकुरावर आहे, पण तुम्ही कधीही तुमचं Attention या पुस्तकावरून बाहेर कुठेतरी भुंकणाऱ्या कुत्र्याच्या आवाजाकडे वळवू शकता. आपल्याकडे असणाऱ्या या क्षमतेमुळे आपल्याकडून Attention चा अत्याधिक वापर होतो तर दुसऱ्या बाजूला Peripheral Awareness कडे दुर्लक्ष होते. कारण Peripheral Awareness मध्ये नियंत्रण करण्यासारखं असं काही नसतं. त्यामुळे Attention आणि Peripheral Awareness यांमध्ये असमतोल निर्माण होतो (तांदूळ कमी, पाणी ज्यादा, भात गिर 😊). याचा परिणाम आपल्या मानसिक स्थितीवर होतो. या असमतोलामुळे चुकीचे निर्णय घेतले जातात. याचं कारण म्हणजे आपण फक्त Attention मध्ये असणाऱ्या गोष्टींना विचारात घेऊन निर्णय घेतो. गरजेनुसार निर्णय घेण्यापेक्षा भावनांना आधार मानून निर्णय घेतले जातात. भावनेच्या भरात घेतलेले निर्णय बहुतेक वेळा चुकीचे असतात. अशा निर्णयांचा नंतर पश्चाताप होतो. याचे कारण म्हणजे भावना सतत बदलत असतात. Mindfuleness मुळे या गोष्टींना आळा बसतो.</p>

                <p>Mindfuleness म्हणजे आपल्या मनात ज्या भावना, विचार चालू आहेत त्यावर लक्ष ठेवून असणे. स्वतःच्या मनाचा सतत ठाव घेणे. जेव्हा तुम्ही असा सततचा ठाव घेत राहता, तेव्हा तुमच्याच मनाशी तुमची नव्याने ओळख होते. तुम्हाला तुमच्या मधील उणीवा कळून येतात. मुख्य म्हणजे जसाजसा Mindfuleness चा विकास होत जातो, तसतसे तुमच्या विचार करण्याच्या पद्धतीत बदल होतो. तुमच्या विचारांवरील नकारार्थक भावनांचा प्रभाव कमी होतो आणि सकारात्मक भावनांचा प्रभाव वाढतो. तुमचं संपूर्ण व्यक्तिमत्व बदलून जातं.</p>

                <p>Mindfuleness हा ध्यानाचा सर्वात महत्वाचा उद्देश आहे.</p>

                <p><strong>Intention &ndash;</strong></p>

                <p>Intention म्हणजे एखादी गोष्ट करण्याची तुमची इच्छा. उदाहरणार्थ जेव्हा तुम्ही ध्यानाला बसता तेव्हा तुमचं Intention हे श्वासाकडे पाहणे हे असतं. ध्यानामध्ये तुमचे Intentions अतिशय महत्वाची भूमिका बजावतात. ध्यानाच्या प्रत्येक स्टेज मध्ये तुम्हाला अशी विशिष्ट Intentions ठेवून काम करायचं आहे.</p>

                <p><strong>Basics</strong></p>

                <p><strong>ध्यानासाठी बसण्याची रीत</strong><strong>-</strong></p>

                <p>ध्यानासाठी कोणत्याही विशेष पद्धतीने बसण्याची आवश्यकता नाही. कारण ध्यान हा मनाचा व्यायाम आहे, शरीराचा नाही. तुम्हाला आरामशीर वाटेल अशा पद्धतीने तुम्ही बसू शकता. पण जमिनीवर झोपून ध्यान करणे टाळा. कारण यामुळे ध्यान करताना झोप लागू शकते. पाठीचा कणा ताठ राहील व शरीरावर कमीत कमी ताण पडेल अशा पद्धतीने बसा.</p>

                <p><strong>वेळ</strong><strong>-</strong></p>

                <p>तुम्ही कधीही ध्यानासाठी बसू शकता (हे पिण्यासारखंच आहे (पाणी) 😊), पण दिवसातील विशिष्ट अशी वेळ ठरवणं आणि ती वेळ फक्त ध्यानासाठी राखून ठेवणे उत्तम. हा वेळ तुम्ही फक्त आणि फक्त तुमच्यासाठी राखून ठेवा. वेळ अशा पद्धतीने ठरवा की त्या वेळी तुमचं मन ताजंतवानं असेल. दुपारच्या वेळी ध्यान करणे टाळा, कारण यावेळी झोप लागण्याची शक्यता अधिक असते (दुपारी जागं असणंच आधी दुर्मिळ 😊). सुरुवात दररोज १० मिनिटे बसण्याने करा. नंतर हळूहळू वेळ वाढवत जा. किमान दररोज ४५ मिनिट बसण्याचं लक्ष्य ठेवा.</p>

                <p><strong>श्वास</strong><strong>-</strong></p>

                <p>ध्यान करण्यासाठी बऱ्याच गोष्टींचा वापर करता येतो पण श्वास हा सर्वात उत्तम पर्याय आहे. एकतर श्वास सदैव तुमच्यासोबत असतो आणि ध्यानाच्या पुढच्या स्टेजिसमध्ये श्वास इतर गोष्टींपेक्षा अधिक उपयुक्त आहे.</p>

                <p>ध्यानामध्ये श्वासाकडे वेगळ्या पद्धतीने पाहावे लागते. <strong>नाकातून आत किंवा बाहेर जाणारी हवा असा अर्थ येथे आपल्याला अपेक्षित नाही</strong><strong>.</strong><strong>येथे श्वास म्हणजे तुमच्या नाकाच्या पुढच्या शेंड्याकडील भागात होणाऱ्या संवेदना</strong><strong>.</strong><strong>संवेदना म्हणजे आत जाणाऱ्या हवेचा थंडपणा</strong><strong>,</strong><strong>त्या हवेचा नाकाच्या त्वचेवर पडणारा दाब</strong><strong>,</strong><strong>बाहेर जाणाऱ्या हवेचा उबदारपणा इत्यादी</strong><strong>.</strong> ज्या भागात तुम्हाला सर्वाधिक संवेदना जाणवतील असा नाकाच्या शेंड्याकडील साधारण एक इंचाचा भाग निवडा. हा भाग म्हणजे तुमचं ध्यान करण्याचं साधन. शेंड्याकडील भाग निवडण्याचं कारण म्हणजे इथं सर्वाधिक नसा असतात, ज्यामुळे इथे सर्वाधिक संवेदना जाणवतात.</p>

                <p><strong>श्वास नियंत्रित करणे टाळा</strong><strong>.</strong></p>

                <p>श्वास घेताना त्यावर नियंत्रण करणे टाळा. तुमच्या नैसर्गिक श्वास चक्रामध्ये व्यत्यय आणणे टाळा. श्वास आणि उच्छ्वास हा नैसर्गिकरीत्या होऊ द्या.</p>

                <p><strong>अपेक्षा</strong><strong>&ndash;</strong></p>

                <p>ध्यानाला बसताना आपल्या अपेक्षा बाजूला ठेवणे अत्यावश्यक आहे. संपूर्ण कालावधीसाठी माझं लक्ष फक्त आणि फक्त श्वासाकडे राहिलंच पाहिजे अशा अपेक्षेनं जर तुम्ही ध्यानाला बसाल तर शांततेपेक्षा त्रासच अधिक होईल. कारण अशा अपेक्षा पूर्ण होणे, या सुरुवातीच्या स्टेजमध्ये अशक्य आहे. यामुळे अपेक्षा पूर्ण न होण्याचा त्रास तर होईलच सोबत ध्यान करण्याचं तुमचं मोटिवेशनही नाहीस होण्याची शक्यता अधिक. म्हणूनच कोणतीही अपेक्षा न ठेवता ध्यानाला बसा.</p>

                <p><strong>सुरुवात</strong><strong>-</strong></p>

                <p><strong>४ पायऱ्या</strong><strong>-</strong></p>

                <p>ध्यानाला बसल्यानंतर लगेच श्वासाकडे न जाता खालील चार गोष्टी करण्याने सुरुवात करा.</p>

                <ul>
                    <li>पहिली पायरी &ndash; कोणत्याही विशिष्ट अशा गोष्टीकडे लक्ष न देता तुम्हाला जाणवणाऱ्या सर्वच गोष्टींबद्दल जागरूक राहण्याचा प्रयत्न करा. या क्षणात राहण्याचा प्रयत्न करा. या वेळी तुमचे डोळे बंद असल्याने तुम्हाला जाणवणाऱ्या गोष्टी म्हणजे आवाज, वास, तुमच्या शरीरात जाणवणाऱ्या संवेदना आणि विचार. तुमचे Attention मुक्तपणे फिरू द्या मात्र कोणत्याही गोष्टीत गुंतून जाऊ नका. वर्तमान क्षणात राहण्याचा प्रयत्न करा. विचारांतही गुंतणे टाळा.</li>
                    <li>दुसरी पायरी &ndash; आता तुमचं Attention शरीरामध्ये होणाऱ्या संवेदनांकडे वळवा. शरीरातील संवेदना म्हणजे स्पर्श, शरीरातील विविध भागांवर पडणारा दाब, थंडपणा, उष्णता, हालचाल इत्यादी. पण असं करताना कोणतीही गोष्ट दाबून टाकण्याचा प्रयत्न करू नका. आपल्याला Peripheral Awareness ही राखून ठेवायचा आहे, हे लक्षात घ्या.</li>
                   
                    <li>तिसरी पायरी &ndash; आता Attention श्वासाशी संबंधित संवेदनांकडे वळवा. श्वासाशी संबंधित संवेदना म्हणजे नाक व छातीतील संवेदना. या दोन्हीबद्दल जागरूक राहण्याचा प्रयत्न करा. Peripheral Awareness खुला ठेवा.</li>
                    <li>

                    </li>
                    <li>चौथी पायरी &ndash; आता Attention नाकाच्या शेंड्याकडील भागाकडे वळवा. या भागात होणाऱ्या संवेदनांकडे लक्ष द्या. सोबत Peripheral Awareness खुला ठेवा.</li>
                </ul>

                <p><strong>Peripheral Awareness</strong><strong>खुला ठेवणे</strong><strong>&ndash;</strong></p>

                <p>श्वासावर लक्ष ठेवताना Peripheral Awareness खुला ठेवणे अत्यावश्यक आहे. <strong>तुम्ही श्वासावर जितकं अधिक लक्ष केंद्रित कराल तितकाच तुमचा</strong><strong>Peripheral Awareness</strong><strong>पुसट होईल</strong><strong>.</strong> त्यामुळे जास्तीची मेहनत टाळा. अशा पद्धतीने समतोल ठेवा की तुमचं Attention श्वासावर राहील आणि Peripheral Awareness ही खुला राहील. Peripheral Awareness जितका पुसट होईल तितकाच तुमचे Attention विचलित होण्याची शक्यता अधिक असते हे लक्षात ठेवा.</p>

                <p><strong>ध्यानाच्या स्टेजिस</strong></p>

                <p>ध्यानाच्या १० स्टेजिस आहेत. प्रत्येक स्टेज मध्ये आपल्याला काही विशिष्ट उद्देशांवर काम करायचं आहे. एक स्टेज पार पडल्यानंतर पुढच्या स्टेजवर काम करायचं आहे.</p>

                <p><strong>स्टेज १</strong><strong>&ndash;</strong><strong>ध्यानासाठी दररोज वेळ देणे</strong><strong>.</strong></p>

                <p>दररोज ध्यानासाठी विशिष्ट वेळ ठरवणे आणि त्या पूर्ण कालावधीसाठी ध्यान करणे ही पहिली स्टेज आहे. तुम्ही ध्यानाला देत असलेला वेळ आणि नियमित ध्यान करणे या दोन्ही गोष्टी महत्वाच्या आहेत. जरी तुम्हाला ध्यान करावसं वाटत नसेल तरीही बसण्याचा प्रयत्न करा. तुम्हाला काय वाटतं त्यापेक्षा काय करणे गरजेचं आहे याला अधिक महत्व द्या. दररोज न चुकता ध्यानास बसणे हा पहिल्या स्टेजचा उद्देश आहे.</p>

                <p><strong>स्टेज २</strong><strong>&ndash;</strong><strong>मनाचे विचलन कमी करणे</strong><strong>.</strong></p>

                <p>प्रथम वर सांगितलेल्या ४ पायऱ्या पूर्ण करा आणि ध्यानास सुरुवात करा.</p>

                <p><strong>या स्टेजमधील तोंड द्याव्या लागणाऱ्या समस्या</strong><strong>&ndash;</strong></p>

                <p>तुम्ही ध्यानास सुरुवात करताच तुमच्या लक्षात येईल की श्वासावर फार वेळ Attention रोखून ठेवणे कठीण आहे. तुमचे Attention सतत श्वासावरून ढासळेल. विचलित होईल.</p>

                <p>

                </p>

                <img src="/medi1.png" />

                <p>

                </p>

                <p><strong>यामध्ये पुढील प्रमाणे क्रिया होतात</strong> <strong>-</strong></p>

                <ul>
                    <li>प्रथम तुम्ही श्वासावर लक्ष केंद्रित करता. काही वेळासाठी तुमचे लक्ष श्वासावर टिकून राहते.</li>
                    <li>यानंतर एखादा आवाज, एखादा विचार किंवा अशीच एखादी गोष्ट तुमचे लक्ष वेधून घेते. तुमचे श्वासावर असणारे लक्ष थोडेसे हटते.</li>
                    <li>यानंतर तुम्ही विचलित होता. श्वासावरून तुमचे लक्ष पूर्णपणे ढळते. आपल्याला श्वासावर लक्ष ठेवायचं आहे, हेच तुम्ही विसरून जाता.</li>
                    <li>तुमचं मन पूर्णतः भरकटत. तुम्ही इतर विचारांमध्ये गुंतून जाता.</li>
                    <li>काही वेळाने अचानक लक्षात येते की तुम्ही ध्यान करत होता आणि तुम्ही तुमच्या श्वासावर लक्ष देणे अपेक्षित आहे. तुम्ही भानावर येता आणि पुन्हा श्वासाकडे वळता.</li>
                </ul>

                <p>या स्टेजमध्ये आपल्याला मनाच्या भरकटण्यावर काम करायचं आहे आणि हे घडण्यापासून रोखायचे आहे. यासाठी खालील मार्गांचा अवलंब करावयाचा आहे.</p>

                <p><strong>श्वासाकडे उलट दिशेने पाहणे</strong><strong>&ndash;</strong></p>

                <p>सामान्यता आपण हवा आत घेण्याला श्वासाची सुरुवात तर हवा बाहेर सोडण्याला श्वासाचा शेवट मानतो. पण यामुळे उच्छ्वास आणि श्वास यामध्ये खंड पडतो आणि या खंडामध्ये मन विचलित होण्याची शक्यता अधिक असते. यावर उपाय म्हणजे हवा बाहेर सोडण्याला (उच्छ्वास) श्वासाची सुरुवात मानणे, तर हवा आत घेण्याला श्वासाचा शेवट मानणे. यामुळे यामधील खंड भरून निघतो आणि तुम्ही अधिक वेळापर्यंत श्वासावर टिकून राहता.</p>

                <p><strong>श्वास मोजणे</strong><strong>&ndash;</strong></p>

                <p>श्वासाकडे लक्ष देतानाच, श्वास मोजण्यास सुरुवात करा. श्वास आणि उच्छ्वास मिळून एक श्वास माना. पण मोजताना १० श्वासापर्यंतच मोजा. १० च्या पुढे मोजू नका. १० श्वासानंतर पुन्हा एक पासून मोजण्यास सुरुवात करा. जर असे मोजताना तुम्ही मधेच विचलित झाला आणि तुम्ही अंक मोजणे विसरला तर पुन्हा एकपासून मोजण्यास सुरुवात करा.</p>

                <p><strong>श्वासाची सुरुवात आणि शेवट शोधणे</strong><strong>&ndash;</strong></p>

                <img src="/medi2.png" />



                <p>ही एक महत्वाची टेक्निक आहे.</p>

                <p>श्वास आत घेणे आणि बाहेर सोडणे यांमध्ये खालील आकृतीत दाखवल्याप्रमाणे दोन खंड असतात. या खंडांमुळे श्वास आणि उच्छ्वास यांची सुरवात आणि शेवट शोधता येतो. ही सुरुवात आणि शेवट शोधण्याचे Intention मनामध्ये ठेवा आणि ते शोधण्याचा प्रयत्न करा. यामुळे तुम्ही श्वासात बऱ्याच वेळापर्यंत गुंतून राहता आणि विचलित होण्याचे प्रमाण घटते.</p>


                <p><strong>Positive Reinforcement :</strong></p>

                <p>हा सर्वात महत्वाचा मुद्दा आहे आणि याचा अवलंब करण्याने ध्यानाचे उद्देश अधिक लवकर प्राप्त होण्यास मदत होते.</p>

                <p><strong>चुकीची कृती</strong><strong>&ndash;</strong></p>

                <p>ध्यान करत असताना जेव्हा आपल्या लक्षात येते की आपण आपल्या श्वासापासून भरकटलो आहोत, तेव्हा सामान्यता आपण तातडीने पुन्हा श्वासाकडे वळून पुन्हा ध्यान करण्यास आरंभ करतो. पण अशा तातडीने श्वासाकडे वळण्याने मनाला ट्रेन करण्याची एक महत्वाची संधी हुकते. याउलट Positive Reinforcement मुळे मन लवकर शिक्षित होते. यासाठी खालील मार्गाचा अवलंब करा.</p>

                <p><strong>योग्य कृती</strong><strong>&ndash;</strong></p>

                <p>जेव्हा तुमच्या लक्षात येते की तुम्ही श्वासापासून भरकटले आहात तेव्हा लगेच श्वासाकडे वळणे टाळा. श्वासाकडे वळण्याआधी आपण श्वासापासून भरकटलेले होतो आणि हे आता आपल्या लक्षात आले आहे यासाठी स्वतःला शाबासकी द्या, आनंद व्यक्त करा किंवा स्वतःवरच खूष व्हा. यामुळे असं होते की मेंदूमध्ये या सापडण्याची नोंद एक आनंददायक गोष्ट म्हणून होते आणि तुमचं मन भरकटणे आणि सापडणे यामध्ये जो कालावधी असतो तो कमी होत जातो. यालाच Positive Reinforcement असं म्हणतात. त्यामुळे ध्यानामध्ये ही पायरी अनिवार्य आहे.</p>

                <img src="medi3.png" />

                <p>हे सर्व करताना Peripheral Awareness खुला राहील याची काळजी घ्या. कोणत्याही गोष्टीला block करू नका. <strong>लक्षात घ्या की</strong> <strong>तुम्ही श्वासावर जितकं अधिक लक्ष केंद्रित कराल तितकाच तुमचा</strong><strong>Peripheral Awareness</strong><strong>पुसट होईल</strong><strong>.</strong>त्यामुळेया दोन गोष्टींमध्ये समतोल साधणे अत्यावश्यक आहे. म्हणूनच जास्तीची मेहनत टाळा. या सर्व कृती relax राहून करण्याचा प्रयत्न करा. विचार, भावना, संवेदना, आवाज हे background ला चालू राहू द्या. त्यांना block करू नका. अशा पद्धतीने समतोल ठेवा की तुमचं Attention श्वासावर राहील आणि Peripheral Awareness ही खुला राहील. Peripheral Awareness जितका पुसट होईल तितकाच तुमचे Attention विचलित होण्याची शक्यता अधिक असते हे लक्षात ठेवा.</p>

                <p>तसेच मन भरकटणे हे या सुरुवातीच्या स्टेजिसमध्ये सामान्य आहे. मन सतत विचलित होत राहील. जसजसे तुम्ही पुढच्या स्टेजिसला जाल तसतसे हे विचलन कमी होत जाईल. म्हणून या टप्प्यावर अशा अपेक्षा ठेवणे निरर्थक आहे. जरी मन सतत विचलित होत राहिलं तरी हार मानू नका. तसेच मनावर जोर लावून लक्ष टिकवून ठेवण्याचा प्रयत्न करू नका. वर सांगितलेल्या techniques वापरा.</p>

                <p>ध्यानामध्ये तुमच्या इच्छाशक्तीचा काहीही उपयोग नाही. तुमची इच्छाशक्ती तुमच्या मनाला भरकटण्यापासून किंवा विचलित होण्यापासून रोखू शकत नाही. पुन्हापुन्हा श्वासाकडे परत येणे आणि श्वासावर लक्ष टिकून राहावं यासाठी तुम्ही तुमच्या मनात ठेवलेलं Intention ह्या दोनच गोष्टी ध्यानाच्या यशस्वितेसाठी महत्वाच्या आहेत. म्हणूनच श्वासावर लक्ष टिकून राहण्यासाठी जोर लावणे टाळा. मनाला ट्रेन करण्यासाठी काही वेळ देणे आवश्यक आहे आणि तो द्यावाच लागतो. जोर लावणे म्हणजे झाडाची उंची वाढवण्यासाठी त्याला जोराने ओढण्यासारखे आहे किंवा कळीचं फुल होण्यासाठी त्याला हाताने उलगडण्यासारखं आहे. याने काहीही साध्य होणार नाही, पण त्रास मात्र होईल.</p>

                <p><strong>श्वासाच्या संवेदना पुसट होणे</strong><strong>&ndash;</strong></p>

                <p>ध्यान करताना काही वेळा असं होते की श्वासाच्या संवेदनाच जाणवत नाहीत किंवा फारच पुसटशा जाणवतात. यावर उपाय म्हणजे शरीरातील इतर एखाद्या भागात संवेदना (sensations) शोधण्याचा प्रयत्न करणे. अशा वेळी तुमचे Attention तुमच्या हाताच्या बोटांकडे वळवा. दोन बोटांच्या मध्ये जी जागा असते, त्या जागेत काही संवेदना सापडतात का ते शोधा. नाही सापडल्या तरी हरकत नाही, फक्त शोधण्याचा प्रयत्न करा. थोड्या वेळाने पुन्हा श्वासाकडे परत फिरा. आता तुमच्या श्वासाच्या संवेदना अधिक तीव्र झालेल्या आढळतील.</p>




            </div>
        ]

    },
    6: {
        name: <h1>UX Writing</h1>,
        summary: <p>Ux Writing</p>,
        content: [
            <>

                <a target="_blank" href='/UXW Exercise-1.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-1.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-2.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-2.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-3.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-3.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-4.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-4.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-5.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-5.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-6.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-6.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-7.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-7.jpg'
                        />

                    </div>
                </a>
                <a target="_blank" href='/UXW Exercise-8.jpg'>
                    <div>
                        <img
                            src='/UXW Exercise-8.jpg'
                        />

                    </div>
                </a>
            </>
        ]
    }
}

export default articles;

