# Cipher To Silicon: The History of Computing through cryptography
> **Project Theme:** Historical Computing | **Group 9**

*Note: This is a living document. All features and design choices are subject to change until the final submission.*

## Technical and Creative Discussions
*   During the development of Cipher To Silicon, we focused on making the project both informative and interactive. Our main idea was to present the history of cryptography and computing as an interactive virtual museum instead of a website with only text and images. We created the virtual exhibit, historical timeline, interactive exhibits, cipher simulators, and codebreaking challenge to make the project more engaging. We also added encryption and decryption features for the Caesar Cipher and Vigenère Cipher and showed the results instantly to help users understand how they work. The name Cipher To Silicon represents the connection between the development of cryptography and the growth of computing technology, which became the main theme of our project. Throughout development, we also fixed layout, formatting, and responsive design issues to improve the overall user experience.

## Aha Moments
*   While developing the project, we realized that interactive learning works much better for this topic than just presenting information as text. Cryptography can be difficult to understand by only reading about it, so giving users the chance to enter a message, change the cipher settings, and immediately see the encrypted output makes the concepts much easier to understand. We also realized that the history of cryptography is closely connected to the history of computing. At first, we thought the project would mainly focus on the development of encryption, but as we worked on the exhibits, we saw how the increasing complexity of encryption led to the need for faster and more powerful computers.

## Challenges Encountered
*   One of the biggest challenges we encountered as a group was organizing a large amount of historical information while keeping the interface easy to use. We also had to make several changes to the timeline during development. We encountered problems with the formatting, image display, text visibility, and overall layout, so we spent time making adjustments until everything became easier to read and navigate. Another challenge was keeping the design consistent throughout the project. Since the virtual museum has different sections and interactive features, we had to make sure that the colors, fonts, backgrounds, and layouts matched each other so the whole project looked organized and connected. We also had some difficulty using GitHub since most of us had little experience with it. Because of this, we spent time learning how to manage the repository.

## Disclosure on use of AI
In the development of this project Artificial Intelligence (AI) tools were utilized to assist with tasks such as,
brainstorming conceptual layouts, structuring the project structure and organization, formatting texts, and for refining the document structure.

   **The following AI Tools were used:**
   * ChatGPT 5.6 - Used to help in brainstorming ideas, structuring the project layout, and organizing the development roadmap.
   * Google Gemini 3.1 Pro - Used to assist in brainstorming interactive features, refining UI/UX concepts, and formatting project documentation.

*All AI-generated outputs were thoroughly reviewed, edited, and validated by the project members to ensure historical accuracy, alignment with our project goals, and originality of the final product. The core concepts, research, and technical implementation remain the original work of the group.*
   
---

# Project Proposal
## Project Overview
Throughout history, people have looked for ways to secure sensitive information. Early methods of encryption began with classical ciphers such as the Caesar cipher. However, as communication became more important, encryption methods also became more advanced. The manual codebreaking methods of the past became time-consuming and inefficient as these systems grew more complicated. 

This led mathematicians and engineers to develop automated and mechanical solutions for encryption and codebreaking. In the early twentieth century, the development of polyalphabetic ciphers eventually contributed to the creation of electromechanical rotor machines, including the Hebern Rotor Machine and Arthur Scherbius's Enigma Machine. 

This virtual exhibit, originally conceptualized as **Cipher To Silicon**, explores cryptography and its relationship with the development of computing technologies. The increasing complexity of cryptographic systems before and during World War II made encrypted communications incredibly difficult to decipher, prompting the development of specialized machines such as the Bombe and Colossus. By tracing the history of cryptography from classical ciphers to the Digital and Network Age, this project highlights how the growing challenges of encryption forced the invention of early general-purpose computers like the Harvard Mark I, ENIAC, and UNIVAC. Ultimately, the exhibit showcases how these wartime developments laid the foundation for modern internet security and encryption systems that protect our information today.

---

## Interactive Features

*   **User Simulation (Rotor Encryption):** Users can visually simulate the operation of a simplified three-rotor encryption module to see how mechanical rotors laid the groundwork for early computing. By customizing numeric offsets, users can observe how minor configuration shifts drastically alter encrypted outputs. This hands-on simulation highlights the mathematical complexity that necessitated programmable codebreaking machines.
*   **Interactive Historical Timeline:** A vertically scrolling timeline guides users through the evolution of secure communications from c. 50 BCE to the modern Internet Security Age. The timeline categorizes over 2,000 years of history into four filterable eras:
    *   **Classical:** Highlighting algorithmic transformations like the Caesar Cipher.
    *   **Mechanical:** Covering the shift to polyalphabetic and rotor-based automation.
    *   **Wartime Computing:** Focusing on how cryptanalysis at Bletchley Park forced the invention of early electronic computers.
    *   **Digital & Network Age:** Showcasing how cryptography became the foundation for modern web trust and personal encryption.
*   **Codebreaking Challenge:** Users are presented with encrypted messages and clues, allowing them to experience the challenges faced by wartime cryptanalysts. Users must attempt to decipher the messages within a limited number of attempts. The difficulty scales up gradually, introducing new cryptographic concepts as the user progresses.

---

## Design & UI Guidelines

Aiming for a vintage, wartime aesthetic using a monochrome/muted grayscale palette.

### Color Palette
| Element | Hex Code | Description |
| :--- | :--- | :--- |
| **Background** | `#F5F5F5` | White-ish Gray |
| **Primary Text & UI** | `#1A1A1A` | Near Black |
| **Accents & Buttons** | `#8E8E8E` | Medium Gray |
| **Cipher Output Text**| `#4A4A4A` | Dark Gray |
| **Subtle UI Elements**| `#D4D4D4` | Light Gray |

### Typography
*   **Headings & Titles:** *Special Elite*, *Courier Prime*, or similar typewriter alternatives.
*   **Body Text:** *Inter* or *Open Sans*.
*   **Cipher/Encrypted Data:** *Fira Code* or a standard *Monospace* font.

### UI & Interactive Elements
*   **Simulation Aesthetics:** Mechanical keystroke animations featuring glowing paths that trace the signal through the simplified rotor-based cipher system.
*   **Rotor Settings:** Fully coded and interactable to allow for the modification of rotor positions.
*   **Timeline Layout:** A horizontal path with clickable circular nodes for exploring key events.
*   **Timeline Pop-ups:** Clean modal cards displaying historical images, diagrams, and notable figures.
*   **Codebreaking UI:** Clues are styled as classified manila dossiers, while input fields use terminal-style text boxes.
*   **Difficulty Scaling:** Subtle visual static is added to the background as cryptographic concepts increase in difficulty.
  
---

## Group Members (Group 9)
*   Catapang, Nathan James
*   Hernaez, Raeka Estrelle
*   Serrano, Paul Rhazzel
*   Tamayo, Chelsea Nichole

---

## References & Inspiration
*   [Enigma Machine Emulator](https://www.101computing.net/enigma-machine-emulator/)
*   [National Museum of Fine Arts (Panoramic Display Inspiration)](https://nmfa.nationalmuseum.gov.ph/?fbclid=IwY2xjawTMa2BleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeoA4T0boNXsiYvGKsnJP15aat02wvEZxTCl-_2vttHcj7zTLY24QOa8RP3Es_aem_1vKiR7KrYdZSnsPZrIhaLg)
*   [Metropolitan Museum of Art 360 (Another Panoramic Display Inspiration)](https://www.360cities.net/image/metropolitan-museum-of-art?__cf_chl_tk=HToqsa.6oGb_RhwEHYORfnD7l_zNYlpiPj0SnfkaRv4-1784646716-1.0.1.1-QVDJx.yGR.qww.420TajWHsOI7um59UdAYI.4kYDwIo&fbclid=IwY2xjawTMbOhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEel65DVJoA3amZvP5Te1xNgWUOU6ku09RMDWWNkSQ80_YNQjhGUXt_SXt8aiU_aem_HtaJsqbh5NOTl1msw_ULHA)
