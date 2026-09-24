/*
  ============================================================
  INHALTE BEARBEITEN
  ============================================================
  Du kannst die Texte dieser Datei direkt ändern, ohne das
  HTML oder JavaScript anfassen zu müssen.

  - title / kicker / body = Texte
  - quote = Zitat
  - source = Quellenangabe
  - thesisUrl = Link zu deiner Masterarbeit
  ============================================================
*/

const STORY = {
  thesisUrl: "#",

  scenes: [
    {
      type: "hero",
      kicker: "Masterarbeit · 2021",
      title: "Woher kommen Informationen, wenn eine Impfung zur persönlichen Entscheidung wird?",
      body: "Sieben Interviews mit syrischen Migrant:innen in Leipzig untersuchten, wie Informationen zur COVID-19-Impfung gesucht, bewertet und im sozialen Umfeld weitergegeben wurden.",
      note: "Scrollen, um die Untersuchung zu entdecken."
    },

    {
      type: "context",
      kicker: "01 · Die Perspektive",
      title: "Gesundheitsinformationen sind nicht für alle gleich zugänglich.",
      body: "Für Menschen mit Migrationserfahrung können Sprache, Zugänge zum Gesundheitssystem und unterschiedliche Medienräume beeinflussen, wie Informationen gefunden und eingeordnet werden.",
      cards: [
        ["Sprache", "Informationen sind nicht immer verfügbar oder verständlich."],
        ["Institutionen", "Behörden und Gesundheitssysteme können mit Distanz oder Unsicherheit verbunden sein."],
        ["Medien", "Informationen werden über unterschiedliche, teils mehrsprachige Kanäle gesucht."]
      ]
    },

    {
      type: "study",
      kicker: "02 · Die Untersuchung",
      title: "Sieben Interviews. Ein Einblick in individuelle Informationswege.",
      stats: [
        ["24–37", "Alter"],
        ["28,5", "Ø Alter"],
        ["4 / 3", "Männer / Frauen"],
        ["5 / 7", "geimpft"],
        ["Leipzig", "Ort"]
      ],
      methods: [
        ["01", "Offene Leitfadeninterviews"],
        ["02", "Konzentrische Kreise zur Erfassung von Informationsquellen"],
        ["03", "Qualitative Inhaltsanalyse"]
      ],
      body: "Die Teilnehmenden hatten eine Migrationserfahrung, die höchstens fünf Jahre zurücklag. Rekrutiert wurde über das Schneeballprinzip und einen Migrantenverein."
    },

    {
      type: "rings",
      kicker: "03 · Informationsquellen",
      title: "Woher kommen Informationen?",
      body: "Die konzentrischen Kreise machen sichtbar, welche Informationsquellen in den individuellen Informationsumfeldern der Befragten auftauchten.",
      categories: [
        ["Institutionen", "Ärzt:innen · RKI · CDC"],
        ["Medien", "DW · Fernsehen · Zeitungen · Social Media"],
        ["Soziales Umfeld", "Familie · Freund:innen · Kolleg:innen"],
        ["Community", "Telegram · Facebook-Gruppen · Bekannte"]
      ],
      originalImage: "assets/konzentrische-kreise-original.png"
    },

    {
      type: "trust",
      kicker: "04 · Ein zentraler Befund",
      title: "Vertrauen und Entscheidungsrelevanz fallen nicht immer zusammen.",
      leftTitle: "Vertrauen",
      leftItems: ["Ärzt:innen", "RKI / CDC", "offizielle Informationen"],
      rightTitle: "Entscheidungsrelevanz",
      rightItems: ["persönliche Erfahrungen", "Familie & Freund:innen", "Kolleg:innen & Bekannte", "medizinisches Umfeld"],
      body: "Institutionen und medizinische Fachpersonen wurden häufig als kompetent und vertrauenswürdig wahrgenommen. Für die konkrete Impfentscheidung waren jedoch persönliche Erfahrungen und Gespräche im direkten Umfeld besonders relevant."
    },

    {
      type: "quote",
      kicker: "05 · Informationsflut",
      quote: "„…you hear something, and you hear the opposite of it at the same time, so you never know what's going on.“",
      source: "T7 · Abs. 44",
      body: "Die Interviews zeigen, dass die Fülle an widersprüchlichen und sich verändernden Informationen zeitweise zu Verunsicherung führte."
    },

    {
      type: "community",
      kicker: "06 · Community als Informationsnetz",
      title: "Information wird nicht nur konsumiert. Sie wird weitergegeben.",
      quote: "„…you have the feeling that all the people have the same problems, with getting informations…“",
      source: "T7 · Abs. 54",
      body: "Arabischsprachige Community-Gruppen konnten aktuelle Regeln erklären, übersetzen und einordnen. So wurden soziale Netzwerke zu einer informellen Infrastruktur für Gesundheitsinformationen."
    },

    {
      type: "barriers",
      kicker: "07 · Informationsbarrieren",
      title: "Vier Hürden prägten die Informationssuche.",
      barriers: [
        ["Sprache", "Nicht alle offiziellen Informationen waren auf Arabisch verfügbar."],
        ["Zeit", "Arbeit, Familie, Behörden und Alltag begrenzten die Zeit für aufwendige Recherche."],
        ["Informationsflut", "Widersprüchliche und wechselnde Informationen erschwerten die Orientierung."],
        ["Zugang", "Die Frage blieb: Wo finde ich verlässliche, verständliche und relevante Informationen?"]
      ]
    },

    {
      type: "network",
      kicker: "08 · Persönliche Netzwerke",
      title: "Information bewegt sich über soziale Beziehungen.",
      quote: "„Was ich mache, er macht.“",
      source: "T4 · Abs. 112",
      body: "Ein Interview zeigt besonders deutlich, wie Informationen innerhalb eines persönlichen Umfelds weitergegeben werden können: Eine Person wird zur zentralen Informationsquelle für eine andere."
    },

    {
      type: "trust2",
      kicker: "09 · Vertrauen ist kompliziert",
      title: "Eine Quelle kann kompetent wirken – und trotzdem Zweifel auslösen.",
      quote: "„…diese Plakate kommt von dieser Firma … Dann kann ich nicht … vertrauen.“",
      source: "T4 · Abs. 108",
      body: "Vertrauen hing nicht allein davon ab, ob eine Information offiziell war. Auch vermutete Interessen und die Herkunft einer Information spielten eine Rolle."
    },

    {
      type: "needs",
      kicker: "10 · Unterschiedliche Informationsbedürfnisse",
      title: "Nicht alle suchten nach denselben Antworten.",
      groups: [
        {
          title: "Geimpfte",
          icon: "✓",
          items: ["Wo bekomme ich einen Termin?", "Welche Regeln gelten?", "Welche Nebenwirkungen sind konkret zu erwarten?"]
        },
        {
          title: "Impfzweifler:innen / Ungeimpfte",
          icon: "?",
          items: ["Was wissen wir über Langzeitfolgen?", "Wie transparent sind Unsicherheiten?", "Welche Interessen stehen hinter Impfkampagnen?"]
        }
      ],
      body: "Die Interviews zeigen unterschiedliche Informationsbedürfnisse, die mit der individuellen Haltung zur Impfung zusammenhängen."
    },

    {
      type: "rating",
      kicker: "11 · Bewertung der Impfkommunikation",
      title: "2,75 / 5",
      subtitle: "Durchschnittliche Bewertung der deutschen Impfkommunikation durch die Befragten.",
      positive: ["schnell", "verlässlich"],
      critical: ["wenig arabischsprachige Informationen", "unübersichtliche behördliche Regelungen"],
      note: "n = 7 · qualitative Studie. Die Bewertung ist nicht repräsentativ für die Gesamtbevölkerung."
    },

    {
      type: "synthesis",
      kicker: "12 · Was lässt sich daraus ableiten?",
      title: "Vier Themen verbinden die Ergebnisse.",
      items: [
        ["Sprache", "verständlich & mehrsprachig"],
        ["Vertrauen", "transparent & nachvollziehbar"],
        ["Community", "dort kommunizieren, wo Menschen suchen"],
        ["Informationsflut", "klar, kompakt & orientierend"]
      ]
    },

    {
      type: "recommendations",
      kicker: "13 · Handlungsempfehlungen",
      title: "Was könnte Gesundheitskommunikation daraus lernen?",
      items: [
        ["01", "Informationen dorthin bringen, wo Menschen suchen", "Social Media · Community-Gruppen · Sprachschulen · Behörden · Arbeitsplatz"],
        ["02", "Mehrsprachig und verständlich kommunizieren", "Infografiken · Erklärvideos · einfache Sprache · lokal zugeschnittene Informationen"],
        ["03", "Vertrauenspersonen einbinden", "arabischsprachiges medizinisches Personal · Community-Leader:innen · persönliche Erfahrungsberichte"]
      ]
    },

    {
      type: "final",
      kicker: "14 · Fazit",
      title: "Information allein reicht nicht.",
      body: "Entscheidend ist auch, wo sie verfügbar ist, in welcher Sprache sie vermittelt wird, wem Menschen vertrauen und wie sie in ihrem sozialen Umfeld weitergegeben wird.",
      closing: "Masterarbeit · Qualitative Studie mit sieben syrischen Migrant:innen in Leipzig",
      thesisUrl: "#"
    }
  ]
};
