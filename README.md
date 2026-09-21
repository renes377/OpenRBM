# OpenRBM – Moderner Rennbahnmanager (Beta)

[![Status](https://img.shields.io/badge/Status-Beta-amber.svg)](#)
[![Version](https://img.shields.io/badge/Version-v0.6.14-blue.svg)](#)
[![Lizenz](https://img.shields.io/badge/Lizenz-Proprietary%20Freeware-green.svg)](#)

> **OpenRBM** ist eine moderne, offline-fähige Web- und Desktop-App zur vollständigen Ablösung des proprietären Programms **WinRBM 1.32** für Slotcar-Rennbahnen (kompatibel mit der originalen **Bepfe®-Impulselektronik**).

---

## Live Web-App starten

Die Anwendung kann direkt im Browser gestartet werden – ohne Installation:

**[OpenRBM im Browser öffnen](https://renes377.github.io/OpenRBM/)**

*(Voraussetzung für die serielle Hardware-Schnittstelle: Google Chrome, Microsoft Edge oder ein anderer Chromium-basierter Browser). Nicht für mobile Geräte geeignet.*

---

## Hauptfunktionen (100% Feature-Parität zu WinRBM 1.32)

- **Hardware-Ansteuerung & Zeitmessung**:
  - Bis zu 8 Spuren, Zeitmessung mit ms-genauen Hardware-Zeitstempeln.
  - Direkte serielle Steuerung der Bepfe-Elektronik über die native Browser **Web Serial API** (mit automatischem Reconnect nach F5).
  - Fahrstrom-Relais-Steuerung und Ampelphasen.
- **Klassische Rennmodi**:
  - Freies Training & Zeittraining (Minuten/Sekunden/Runden).
  - Einzelrennen (Runden- und Zeitmodus, Slot-Modus mit Kommarunden, F1-Modus, Volle Distanz).
  - Serienrennen mit automatischen Spurwechsel-Mustern (traditioneller Bepfe-Wechsel `1-3..4-2` oder sequentiell `1-2-3-4`) und Gruppenrotation.
  - Integrierte Vollbild-Qualifikation mit Zufallsgenerator (`🎲 Würfeln`), Einzel-Quali und automatischer 8+7 Gruppenoptimierung.

---

## Zusatzfunktionen gegenüber WinRBM

OpenRBM übernimmt nicht nur alle WinRBM-Funktionen, sondern erweitert sie um zahlreiche moderne Profi-Features für Vereins- und Langstreckenrennen:

### 1. Team- & Langstreckenrennen (Team-Modus)
- **Mehrfahrer-Teams**: Teams mit 2 bis 6 Fahrern und fest zugewiesenem Team-Fahrzeug.
- **Startfahrer-Wahl**: Flexible Zuweisung des Startfahrers in der Startaufstellung; automatischer Vorschlag des zuletzt aktiven Fahrers in Serienläufen.
- **Fliegender Fahrerwechsel im laufenden Rennen**: Blitzschneller Fahrerwechsel per Hotkey (`Shift + 1..8`) oder Direktklick im Scoreboard – ohne das Rennen anhalten zu müssen.
- **Netto-Stint-Zeiterfassung**: Präzise Messung der tatsächlichen Fahrzeit je Fahrer (Standzeiten während Chaos werden automatisch herausgerechnet).
- **Stint-Vorgaben**: Überwachung von Mindest- und Maximal-Stintzeiten.
- **Dedizierte Team-Wertung**: Eigener Auswertungs-Tab **„👥 Team-Wertung“** mit vollständiger Stint-Historie, Runden und Bestzeiten pro Fahrer.

### 2. Crash-Checkpoint & 2-Minuten-Autosave (Weiterfahren nach Absturz)
- **Automatische Hintergrund-Sicherung**: Die Rennengine sichert während des Rennens alle **120 Sekunden (2 Minuten, konfigurierbar)** den kompletten Rennstand (Runden, Netto-Fahrzeiten, Einzelrunden, Teilrunden/Kommarunden).
- **Nahtloses Weiterfahren**: Nach einem PC-Absturz, Stromausfall oder versehentlichem Schließen/F5 bietet OpenRBM sofort den **„Weiterfahren“-Dialog** an.
- **Sicherheits-Wiederanlauf**: Nach der Wiederherstellung bleibt der Fahrstrom aus Sicherheitsgründen **AUS**, bis der Rennleiter den Start per Ampelsequenz explizit freigibt.

### 3. Trainings-Warteschlange & Schiebeband-Rotation
- **Vollautomatische Rotation im Zeittraining**: Bei mehr anwesenden Fahrern als Bahnspuren rotieren die Fahrer vollautomatisch bei Turn-Ende durch.
- **FIFO-Schiebeband**: Alle Fahrer rücken eine Spur weiter, der unterste reiht sich hinten in der Warteschlange ein, oben rückt der nächste ein.
- **🎲 Würfelfunktion**: Mischt die Trainings-Warteschlange auf Knopfdruck nach dem Zufallsprinzip.
- **Turn-Pause mit Fahrerwechselanzeige**: Banner zeigt verbleibende Pausenzeit und **„🔄 Rein: {Name} · Raus: {Name}“**.
- **Live-Status**: Die obere Statusleiste zeigt während der Fahrt **„➡ Rein als Nächstes: {Name}“**.
- **Team-Training**: Auch Teams können als geschlossene Einheit trainieren und rotieren.

### 4. Spurstrafen direkt im Chaos per Tastatur (`1..8`)
- Während eines aktiven Chaos kann der Rennleiter mit den Zifferntasten **`1` bis `8`** der jeweiligen Spur direkt eine Einzelspur-Strafe zuweisen oder aberkennen (optische Verursacher-Markierung).

---

## 🛡️ Beta-Hinweis & Haftungsausschluss

OpenRBM befindet sich aktuell im **Beta-Teststadium**. Die Software wurde mit größter Sorgfalt entwickelt und ausgiebig getestet.

Dennoch erfolgt die Nutzung, insbesondere die Ansteuerung physischer Bahnstrom-Relais und Startampeln über serielle Schnittstellen, **auf eigene Verantwortung**. Es wird keine Haftung für Fehlmessungen, Rennentscheidungen oder Schäden an Hardware und Modellen übernommen (§ 521 BGB). Bitte beaufsichtigen Sie Bahnstrom und Hardware stets sorgfältig.

---

## ☕ Projekt unterstützen

OpenRBM ist ein freies Community-Projekt. Wer die Weiterentwicklung und Pflege unterstützen möchte, kann dem Entwickler gerne einen Kaffee spendieren:

👉 [Unterstützung via PayPal (paypal.me/ReneSchildt)](https://paypal.me/ReneSchildt)

---

© 2026 Rene Schildt. Alle Rechte vorbehalten.  
*Bepfe® und WinRBM sind eingetragene bzw. geschützte Bezeichnungen der jeweiligen Rechteinhaber. OpenRBM steht in keiner offiziellen Verbindung zu Bepfe-Elektronik.*
