
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Sparkles, ChevronRight, Heart, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const diwaliStories = [
  {
    id: 1,
    title: "The Return of Lord Rama",
    category: "Epic Tale",
    readTime: "15 min read",
    image: "🏛️",
    story: `Long, long ago, in the ancient kingdom of Ayodhya, there lived a noble prince named Rama. He was loved by all for his kindness, courage, and devotion to dharma (righteousness). Rama was the eldest son of King Dasharatha and was destined to become king.

However, fate had different plans. Due to a promise made by his father to his stepmother Kaikeyi, Rama was asked to leave the kingdom and live in exile in the forest for fourteen years. Without hesitation or complaint, Rama accepted this with grace and humility. His devoted wife Sita and loyal brother Lakshmana accompanied him into exile.

Deep in the forests of Dandakaranya, the trio lived simply, helping sages and protecting the innocent from demons. But their peaceful life was shattered when Ravana, the powerful demon king of Lanka, kidnapped Sita. Ravana was captivated by Sita's beauty and wanted her for himself.

Rama, heartbroken but determined, searched everywhere for his beloved wife. On his journey, he met Hanuman, the mighty monkey warrior with unwavering devotion. Hanuman became Rama's greatest ally. With the help of Hanuman and an army of brave monkeys and bears led by Sugriva, Rama prepared to rescue Sita.

The army built a magnificent bridge across the ocean to Lanka - a feat that seemed impossible. When they reached Lanka, a great battle ensued. For days, the warriors fought bravely against Ravana's demon army. Rama faced Ravana in an epic battle that shook the earth and heavens.

Finally, Rama's arrow, blessed by the gods, struck Ravana's heart, defeating the demon king and ending his reign of terror. Sita was free at last! The fourteen years of exile had ended, and it was time to return home.

When the people of Ayodhya heard that their beloved prince is returning, they were overjoyed! The entire kingdom erupted in celebration. They lit thousands of oil lamps - diyas - along the roads, on walls, and in windows. The whole city sparkled like a sea of stars, lighting Rama's path home.

The people decorated their homes with flowers and rangoli patterns. They prepared sweets and shared them with neighbors. Music filled the air, and everyone danced with joy. This celebration of light, goodness triumphing over evil, and the joyous homecoming became the festival we know today as Diwali.

That night, when Rama, Sita, and Lakshmana entered Ayodhya, the diyas shone so bright that it seemed like daylight. The kingdom was bathed in golden light, symbolizing the victory of light over darkness, knowledge over ignorance, and good over evil.

This is why, every year, we celebrate Diwali by lighting diyas - to remember Rama's return, to celebrate the victory of good over evil, and to welcome prosperity, happiness, and light into our homes. The lights remind us to be good, kind, and to always choose the path of righteousness, just like Lord Rama.

And so, even today, thousands of years later, when we see the diyas glowing during Diwali, we remember this beautiful story of courage, love, devotion, and the ultimate triumph of good over evil.`
  },
  {
    id: 2,
    title: "Goddess Lakshmi and the Ocean of Milk",
    category: "Divine Legend",
    readTime: "12 min read",
    image: "🌸",
    story: `In the ancient times, when gods and demons both sought immortality, a great event took place that would change the cosmos forever - the churning of the ocean of milk, known as Samudra Manthan.

The gods (Devas) and demons (Asuras) had been at war for ages. Both sides wanted the nectar of immortality (Amrita) that was hidden deep in the cosmic ocean. Lord Vishnu, the preserver of the universe, suggested they work together to churn the ocean and retrieve the nectar.

They used Mount Mandara as a churning rod and the great serpent Vasuki as a rope. The gods held Vasuki's tail while the demons held his head. Back and forth they pulled, churning the cosmic ocean with tremendous force. The earth trembled, and the waters roared.

As they churned, many magical treasures emerged from the depths. First came Kamadhenu, the wish-fulfilling cow. Then appeared the celestial tree Parijata, which granted any wish. The moon rose from the waves, followed by precious gems and divine weapons.

But the most wondrous sight was yet to come. From the shimmering waters arose a radiant goddess, more beautiful than anyone had ever seen. She sat on a magnificent lotus flower, dressed in silk robes of red and gold. Her eyes sparkled with wisdom and compassion. In her hands, she held lotus flowers, symbols of purity and spiritual enlightenment. Gold coins flowed from her palms - an endless stream of prosperity.

This was Goddess Lakshmi, the goddess of wealth, fortune, prosperity, and beauty. As she appeared, the entire universe seemed to bloom. Flowers rained from the sky, celestial musicians played divine melodies, and all beings, both gods and demons, paused in awe of her magnificence.

Goddess Lakshmi looked at all those present. The demons, greedy and arrogant, demanded that she come to them. But Lakshmi chose to go to Lord Vishnu, who represented dharma, righteousness, and selfless devotion. She garlanded him and took her place by his side as his eternal consort.

The gods were blessed with her presence. Wherever Lakshmi went, prosperity followed. She brought abundance, not just of material wealth, but of happiness, peace, and spiritual richness. However, Lakshmi had one condition - she would only stay where there was cleanliness, honesty, hard work, and devotion.

This is why, during Diwali, we clean our homes thoroughly and decorate them beautifully. We light diyas to welcome Goddess Lakshmi into our homes. We believe that on Diwali night, Lakshmi visits every home that is clean, well-lit, and filled with devotion. She blesses those homes with prosperity, health, and happiness for the coming year.

The tradition of making rangoli (colorful floor designs) at the entrance also comes from this belief - the beautiful patterns are meant to welcome Lakshmi and guide her to our homes. We leave our doors and windows open on Diwali night so that she can enter freely.

Business owners worship their account books and tools of trade, asking for Lakshmi's blessings for success in their work. Farmers thank her for good harvests. Students seek her blessings for knowledge and wisdom, for Lakshmi is also the goddess of fortune in all endeavors, not just material wealth.

The story teaches us that true prosperity comes to those who follow dharma - who are honest, hardworking, pure-hearted, and devoted. It's not just about money, but about living a life of purpose, kindness, and righteousness. Just as Lakshmi chose Vishnu for his qualities, she blesses homes where these values are cherished.

So when we light diyas during Diwali, we're not just illuminating our homes - we're inviting divine grace, prosperity, and positivity into our lives. We're celebrating the emergence of Goddess Lakshmi and all the abundance and blessings she brings to the world.`
  },
  {
    id: 3,
    title: "Lord Krishna and the Demon Narakasura",
    category: "Victory Tale",
    readTime: "10 min read",
    image: "⚔️",
    story: `Once upon a time, there lived a powerful demon king named Narakasura. He was the son of the Earth Goddess Bhudevi and had been blessed with incredible strength. But power corrupted him, and Narakasura became cruel, arrogant, and terrorized all three worlds - heaven, earth, and the netherworld.

Narakasura conquered many kingdoms and imprisoned 16,000 innocent princesses in his fortress. He stole the precious earrings of Aditi, the mother of gods, and even took Indra's (the king of gods) magnificent umbrella as a trophy of his conquests. He captured many celestial beings and forced them into slavery. The world trembled under his tyranny.

The gods, sages, and common people suffered greatly. They couldn't fight Narakasura because of a boon he had received - he could only be killed by his own mother, Bhudevi, or someone equally powerful. In their desperation, everyone turned to Lord Krishna, the divine protector.

Krishna's wife, Satyabhama, who was an incarnation of Bhudevi, was furious when she heard about Narakasura's cruelty. She decided to accompany Krishna to battle the demon. Together, they mounted Garuda, Krishna's giant eagle vehicle, and flew towards Narakasura's fortress city of Pragjyotishapura (present-day Assam).

The fortress was protected by powerful magic. It was surrounded by mountains, treacherous waters, and dangerous magical barriers. But Krishna and Satyabhama were undeterred. Using his divine discus (Sudarshana Chakra) and other celestial weapons, Krishna destroyed all the barriers one by one.

When Narakasura heard that Krishna had breached his defenses, he was enraged. He came out riding his mighty elephant, ready for battle. The fight that followed was legendary - earth-shaking and fierce. Narakasura used all his magical weapons and powers, but Krishna countered every move with his divine strength and wisdom.

The demon shot thousands of arrows, hurled mountains, and used dark magic, but Krishna protected Satyabhama and fought valiantly. At one point, Narakasura's weapon injured Krishna slightly. Seeing her husband hurt, Satyabhama became furious. Remembering that she was an incarnation of Bhudevi, she took up her bow and arrow.

With Krishna guiding her hand, Satyabhama shot a powerful arrow that struck Narakasura's heart. The demon king fell from his elephant, defeated at last. As he lay dying, the good that was buried deep within him surfaced. He realized his mistakes and asked Krishna for forgiveness.

Krishna, in his infinite compassion, forgave Narakasura and blessed him, ensuring that his death would be celebrated as a victory of good over evil. Narakasura's last wish was that people should celebrate his death anniversary with lights and festivities, as it marked the end of evil. Krishna granted this wish.

After Narakasura's death, Krishna freed all 16,000 princesses and returned them to their families with honor. He also freed all the celestial beings, returned the stolen treasures to their rightful owners, and restored peace to the three worlds.

When Krishna returned to his kingdom of Dwarka, the entire city celebrated with great joy. People lit thousands of oil lamps to welcome him home and to celebrate the victory of good over evil. They bathed in scented oils, wore new clothes, and distributed sweets. This celebration happened one day before the main Diwali, and is still celebrated in some parts of India as "Naraka Chaturdashi" or "Choti Diwali."

This story teaches us many important lessons. First, that no matter how powerful evil becomes, goodness and righteousness will always triumph in the end. Second, that even in the darkest people, there is a spark of goodness that can awaken when they face truth. Third, that we must stand up against injustice and cruelty, just as Krishna and Satyabhama did.

The tradition of bathing in oil and lighting lamps during Diwali comes from this story. The oil bath symbolizes washing away our own "demons" - our bad habits, negative thoughts, and wrongdoings. The lights represent the victory of our good qualities over our dark tendencies.

So when we celebrate Diwali, we're not just celebrating an ancient victory - we're committing ourselves to be like Krishna and Satyabhama, to fight against evil in all its forms, both within ourselves and in the world around us. We light lamps to remind ourselves to be beacons of goodness, spreading light wherever we go.`
  },
  {
    id: 4,
    title: "The Clever Daughter-in-law and the Dice Game",
    category: "Folk Wisdom",
    readTime: "8 min read",
    image: "🎲",
    story: `In a small village in India, there lived a humble farmer and his wife. They had a young son who worked hard in the fields every day. When the son grew up, they found him a bride - a beautiful and intelligent girl named Sita.

On the first Diwali after her marriage, Sita noticed something strange. Her husband would disappear every Diwali night and return home only at dawn, tired and sad. When she asked him about it, he initially hesitated but finally told her an extraordinary story.

"Many years ago," he began, "my father had a gambling problem. On one Diwali night, he got into a dice game with Yama, the God of Death himself. He lost everything - our wealth, our lands, and finally, in desperation, he even bet his own life. When he lost that too, Yama agreed to give him a reprieve. Yama said he could have one year to settle his affairs, but on the next Diwali night, he must return to play again."

"Every year since then," the young man continued sadly, "either my father or I have been going to play dice with Yama. Each time, we lose and are given another year. Yama says that until someone from our family can beat him at dice, this curse will continue. If we don't show up, he will take our lives immediately. Tonight is my turn again."

Sita listened carefully. She was not just beautiful but also very intelligent and brave. "This time," she declared, "I will go with you."

That night, the couple went to the ancient banyan tree at the edge of the village where Yama appeared every Diwali. Lord Yama arrived exactly at midnight, riding his buffalo, dressed in dark robes. He was surprised to see a young woman there.

"So, you've brought your wife to witness your defeat?" Yama asked.

"No," Sita stepped forward confidently. "I am here to play in his place."

Yama was intrigued. In all the years, no woman had ever dared to challenge him. "Very well," he agreed. "But remember, the stakes are the same - your husband's life."

The game began. They played round after round. Sita played carefully, watching Yama's every move, studying his patterns. She noticed something that her husband and father-in-law had never noticed - Yama wasn't really trying to win; he was testing them. He was waiting for someone brave enough, clever enough, and selfless enough to truly challenge him.

As the night progressed, Sita started winning. More importantly, she understood what Yama truly wanted. Between games, she spoke to him about dharma (righteousness), about life and death, about the purpose of existence. She showed wisdom beyond her years.

Yama was impressed. Here was someone who understood that life wasn't just about winning or losing, but about how you played the game. She wasn't gambling recklessly like her father-in-law had done; she was playing thoughtfully, with courage and intelligence.

As dawn approached, Sita had won enough games to cancel the debt. But more than that, she had earned Yama's respect. 

"You are truly extraordinary," Yama told her. "You didn't just win at dice - you won through wisdom, courage, and devotion to your husband. Your father-in-law lost because of greed and carelessness. Your husband was brave but lacked strategy. But you, you understood the true game."

Yama declared the curse broken. "From this day forward, your family is free. But I want you to light a lamp outside your house every Diwali night. Let it remind others that on this night, Death himself was defeated by courage, intelligence, and righteousness."

From that day on, the family prospered. Every Diwali, they lit a special lamp outside their door - a diya that burned all night, symbolizing the victory of life over death, wisdom over folly, and courage over fear.

This story spread throughout the land, and people started lighting lamps outside their homes on Diwali night. These lights served multiple purposes - they guided travelers in the dark, they kept away negative forces, and most importantly, they reminded everyone that with intelligence, courage, and righteousness, even death can be defeated.

The story of Sita and Yama teaches us many valuable lessons. It tells us that sometimes we inherit problems from previous generations (like the gambling debt), but we have the power to break free from these cycles through our own wisdom and actions. It teaches us that real victory comes not from taking foolish risks but from thoughtful action combined with courage.

It also reminds us that even gods respect those who show true virtue. Yama, the God of Death, wasn't the villain - he was testing the family, waiting for someone worthy to break the curse. When Sita showed up with the right combination of courage, intelligence, and righteousness, he was happy to release them.

So when we light diyas on Diwali, we're not just decorating our homes - we're keeping alive the spirit of this brave woman who defeated death itself. We're declaring that in our homes, wisdom, courage, and goodness reign supreme. We're saying that like Sita, we too will face life's challenges with intelligence and bravery.

The lights remind us to always think before acting, to face our inherited problems with courage, and to know that righteousness will always find a way to triumph, even in the darkest situations.`
  },
  {
    id: 5,
    title: "King Bali and Lord Vamana",
    category: "Divine Blessing",
    readTime: "13 min read",
    image: "👑",
    story: `In ancient times, there ruled a mighty demon king named Mahabali, or simply Bali. Unlike most demon kings who were cruel and evil, Bali was different - he was just, generous, truthful, and deeply devoted to his people. Under his rule, his kingdom flourished. There was no poverty, no crime, no suffering. People lived in perfect harmony and happiness.

King Bali was so generous that he had a standing offer - anyone who came to his palace would receive whatever they asked for. He never turned away anyone empty-handed. His devotion to truth was legendary; he would never break a promise, no matter what the cost.

However, Bali had one flaw - he was proud. His power and generosity had made him believe he was superior to everyone, even the gods. He began performing powerful sacrifices (yajnas) that were making him more powerful than Indra, the king of gods. The gods in heaven became worried. They feared that if Bali became too powerful, he might overthrow them.

The gods approached Lord Vishnu, the preserver of the universe, for help. But Vishnu saw something they didn't - Bali's potential for greatness was being limited by his pride. If freed from pride, Bali could achieve true enlightenment. So Vishnu decided to help Bali while appearing to punish him.

Lord Vishnu took the form of Vamana - a young, small brahmin boy, barely four feet tall, dressed in simple clothes, carrying just an umbrella and a water pot. He looked innocent and harmless. This small brahmin boy arrived at King Bali's palace on the day of a grand sacrifice.

Bali was pleased to see a brahmin visitor. "Welcome, young brahmin," he said warmly. "I am honored by your presence. Ask me for anything, and it shall be yours. Would you like gold? Land? Jewels?"

Vamana smiled gently. "Great king, I need very little. I am a simple brahmin who lives simply. I only need as much land as I can cover in three steps. That will be sufficient for me to build a small hut and live peacefully."

Bali's guru, Shukracharya, who was a great sage, immediately sensed something wrong. This was no ordinary brahmin! He warned Bali, "My king, do not make this promise! This is Lord Vishnu in disguise. If you promise him three steps of land, something terrible will happen!"

But Bali, true to his word and his pride, replied, "Even if this is Lord Vishnu himself, a king must keep his word. I have never refused a request, and I will not start now. What harm can three steps from such a small boy do?"

Against his guru's advice, Bali poured water on Vamana's hands, sealing the promise according to ancient tradition. The moment he did this, an amazing transformation began.

The small brahmin boy started growing. He grew taller and taller, bigger and bigger, until he became Vishnu's cosmic form - Trivikrama - large enough to contain the entire universe. Everyone watched in awe and fear as this happened.

With his first step, Lord Vishnu covered the entire earth. With his second step, he covered all of heaven and the entire cosmos. Then he looked at King Bali and asked, "You promised me three steps of land. I have covered earth and heaven in two steps. Where shall I place my third step?"

Bali realized what had happened. He had lost everything - his kingdom, his power, his wealth - all in two steps. He had nothing left to give for the third step. But he was a king of his word. Pride disappeared, replaced by humility and wisdom. He understood that this was not punishment but a blessing in disguise.

With folded hands and a bowed head, Bali said, "Lord, I have nothing left to give you except myself. Please place your third step on my head."

Lord Vishnu was moved by Bali's humility and devotion to truth. This was what he had hoped for - Bali had transcended his pride. The demon king had become truly great not through power and generosity, but through humility and surrender.

"Bali," said Vishnu, "you have passed the greatest test. You were generous when you had everything, but true nobility is maintaining your dignity and truth even when you have nothing. Because of your devotion to truth and your newfound humility, I grant you immortality and eternal prosperity."

"You shall rule the netherworld (Patala), where you will be king forever. Your kingdom there will be even more prosperous than what you had. And once a year, during Onam (which also coincides with Diwali in some regions), you may return to visit your people on earth. On that day, people will light lamps to welcome you and celebrate your greatness."

Vishnu also promised to guard Bali's kingdom personally. He said he would be the gatekeeper of Bali's palace, showing the great respect he had for this reformed king.

To this day, in Kerala and some other parts of India, Diwali (or the festival of Onam closely related to it) is celebrated as King Bali's annual visit to earth. People clean their homes, light lamps, make beautiful flower decorations (pookalam), and prepare grand feasts. They believe that King Bali returns to see his people and ensure they are happy and prosperous.

The lamps lit during this time serve a dual purpose - they welcome King Bali and also remind us of the light of humility that Bali found. The story teaches us that true greatness doesn't come from power, wealth, or even generosity alone. It comes from humility, truth, and the ability to accept life's lessons with grace.

When we light diyas during Diwali, we're not just welcoming King Bali - we're welcoming these virtues into our own hearts. We're reminding ourselves to be generous like Bali, truthful like Bali, but also humble enough to learn and grow. We're celebrating the triumph of humility over pride, truth over ego, and the grace that comes from accepting our limitations.

The story also teaches us that what seems like loss might actually be a blessing in disguise. Bali lost his earthly kingdom but gained something far greater - immortality, eternal prosperity, and the respect of Lord Vishnu himself. Sometimes, we need to let go of what we have to receive something better.

So the lights of Diwali shine not just to dispel physical darkness, but to dispel the darkness of pride, ego, and false values. They remind us to stay true, stay humble, and trust that the universe has plans for us that are greater than we can imagine.`
  }
];

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [liked, setLiked] = useState([]);

  const getTaruPose = (storyId) => {
    const poses = {
      1: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/c443765be_image-removebg-preview11.png", // Return of Rama - default
      2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/72594edf1_Taru_fam_-removebg-preview.png", // Lakshmi - family
      3: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/ddc2c0228_taru_dancing_-removebg-preview.png", // Krishna - dancing
      4: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/ce2568eaf_taru_sweets-removebg-preview.png", // Dice Game - sweets
      5: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/1b05c83b8_Taru_hiding-removebg-preview.png" // King Bali - hiding
    };
    return poses[storyId] || poses[1];
  };

  const handleShare = (story) => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: `Check out this beautiful story: ${story.title}`,
        url: window.location.href,
      });
    } else {
      alert('Story link copied! Share it with friends! 🪔');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 parchment">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50"></div>
              <div className="relative text-7xl">📖</div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent"
          >
            Stories of Diwali
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-800 max-w-3xl mx-auto font-serif italic"
          >
            "Where every flame carries a story, and every story lights the path to wisdom"
          </motion.p>
          
          <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        </div>

        {/* Story Grid */}
        <AnimatePresence mode="wait">
          {!selectedStory ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {diwaliStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedStory(story)}
                >
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden border-2 border-amber-300 hover:border-yellow-500 hover:shadow-2xl transition-all duration-300">
                    {/* Story Image/Icon */}
                    <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                      {story.image}
                    </div>
                    
                    {/* Story Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-yellow-200 text-amber-900 text-xs font-semibold rounded-full">
                          {story.category}
                        </span>
                        <span className="text-xs text-amber-700 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {story.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-amber-900 mb-3 group-hover:text-orange-800 transition-colors">
                        {story.title}
                      </h3>
                      
                      <p className="text-amber-700 text-sm mb-4 line-clamp-3 font-serif">
                        {story.story.substring(0, 150)}...
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLiked(prev => 
                              prev.includes(story.id) 
                                ? prev.filter(id => id !== story.id)
                                : [...prev, story.id]
                            );
                          }}
                          className={`flex items-center gap-2 transition-colors ${
                            liked.includes(story.id) ? 'text-red-500' : 'text-amber-600 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${liked.includes(story.id) ? 'fill-current' : ''}`} />
                        </button>
                        
                        <div className="flex items-center gap-2 text-amber-700 group-hover:text-orange-700 font-semibold">
                          Read Story
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Story Reader View
            <motion.div
              key="story"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400">
                {/* Taru Reading Section */}
                <div className="bg-gradient-to-r from-amber-200 to-orange-300 p-6">
                  <div className="flex items-start gap-6">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex-shrink-0 w-32 h-32"
                    >
                      <img 
                        src={getTaruPose(selectedStory.id)}
                        alt="Taru"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="bg-white/90 rounded-2xl p-4 relative">
                        <p className="text-amber-900 font-semibold">
                          "Wow! This is one of my favorite Diwali stories! Let me tell you all about {selectedStory.title}. Get cozy and let's dive into this amazing tale! 📖✨"
                        </p>
                        <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-white/90"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Story Header */}
                <div className="h-64 bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-9xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="relative z-10"
                  >
                    {selectedStory.image}
                  </motion.div>
                </div>
                
                {/* Story Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <Button
                      onClick={() => setSelectedStory(null)}
                      variant="outline"
                      className="rounded-full border-2 border-amber-400 text-amber-900 hover:bg-amber-100"
                    >
                      ← Back to Stories
                    </Button>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleShare(selectedStory)}
                        className="p-3 rounded-full bg-amber-200 text-amber-900 hover:bg-amber-300 transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={() => setLiked(prev => 
                          prev.includes(selectedStory.id) 
                            ? prev.filter(id => id !== selectedStory.id)
                            : [...prev, selectedStory.id]
                        )}
                        className={`p-3 rounded-full transition-colors ${
                          liked.includes(selectedStory.id) 
                            ? 'bg-red-100 text-red-500' 
                            : 'bg-amber-200 text-amber-900 hover:bg-red-100 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${liked.includes(selectedStory.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="px-4 py-2 bg-yellow-200 text-amber-900 text-sm font-semibold rounded-full">
                      {selectedStory.category}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-4">
                    {selectedStory.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-amber-700 mb-8 pb-8 border-b-2 border-amber-200">
                    <span className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4" />
                      {selectedStory.readTime}
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <Sparkles className="w-4 h-4 text-yellow-600" />
                      Ancient Wisdom
                    </span>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    {selectedStory.story.split('\n\n').map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-amber-900 leading-relaxed mb-6 font-serif text-lg"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                  
                  {/* Decorative ending */}
                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 text-3xl">
                      <span>🪔</span>
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
                      <span>✨</span>
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
                      <span>🪔</span>
                    </div>
                    <p className="mt-6 text-amber-700 italic font-serif">
                      "May this story light the lamp of wisdom in your heart"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
