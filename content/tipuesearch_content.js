var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n  請各學員自行準備一副有線耳機, 若使用手機觀看影片, 則可以準備手機適用的有線或無線耳機\n  \n .\n \n \n 課程環境:\n \n \n 當廣域網路暢通時:\n \n \n 以 Ubuntu 帳號執行網站編輯器, 程式編寫與心得說明後轉為靜態網頁後, 程式原始碼存至 Gist, 在靜態網站中執行, 靜態網站則以 Github Pages 方式運作.\n \n \n 也可以利用 Replit 帳號從 Github 將網站倉儲 import 後, 在 Replit 中執行網站編輯器, 將程式存至 Gist, 在靜態網站中執行, 靜態網站則以 Github Pages 方式運作.\n \n \n 在無廣域網路連線時:\n \n \n 自行利用區域網路所提供的可攜程式套件, 以及 cmsimde 建立近端網站進行課程項目練習.\n \n \n 利用既有帳號 (Google、Github、Facebook or Apple) 登入 Replit:\n \n \n 在 Replit 平台上學習 Python:\n  \n  https://replit.com/learn/100-days-of-python\n  \n (\n  \n  不同帳號對應使用資源\n  \n )\n \n \n Youtube:\n  \n  https://www.youtube.com/watch?v=ASZVEe2WkI4\n  \n \n \n \n 本課程為機械設計工程系大一的計算機程式課程, 課程目標在教導學員如何利用網站整理與機械設計相關的資訊, 並能直接在網站與伺服器中編寫簡單的 HTML、Javascript、Brython 與 Python 程式, 目的是能在隨後的網際內容管理、電腦輔助設計與實習以及協同產品設計實習等課程中加以應用.\n \n \n 學員主要網站:\n \n \n 個人網站: github_帳號.github.io (\n  \n  Github Pages\n  \n )\n \n \n 分組網站: 由 Github Classroom 指定的分組作業網站\n \n \n 開場:\n \n \n 電腦輔助設計室、協同設計室與工作站室介紹\n \n \n 網路設定\n \n \n Windows 基本操作 (\n  \n  Beginning Windows 10\n  \n ,\n  \n  Windows 11 Made Easy\n  \n )\n \n \n \n  中文注音\n  \n 、與\n  \n  英文輸入\n  \n 練習 (\n  \n  行列輸入法\n  \n )\n \n \n \n  命令列與批次檔案\n  \n \n \n \n  Powershell 與網路設定\n  \n \n \n 網路軟硬體資源介紹 (\n  \n  ChatGPT\n  \n 、\n  \n  VPN\n  \n 、\n  \n  PKI\n  \n 、\n  \n  Springer\n  \n 、操作系統與其他教育版套件下載與安裝)\n \n \n 建立帳號與網站:\n \n \n 利用已經帶有 Brython 執行環境的倉儲, 在設定學員 Github Classroom 首次作業時, 即經由 template 置入, 因此學員只要:\n \n \n 利用學校 email 帳號, 建立 Github 帳號, 以英文姓名縮寫加上一組數字, 選擇最短帳號名稱 例如: jfk40723199, jfk 為其自選的姓名縮寫, 而隨後則加上各自的學號.\n \n \n 擁有 Github 帳號後, 即可透過 Github Classroom assignment 連結取得作業倉儲, 自行在倉儲中設定 Github Pages 後, 即可啟用作業網站 (以下\n  \n  所謂網站均指靜態網站\n  \n , 而用來編輯網站內容的\n  \n  動態網站, 則統稱為網際內容編輯器\n  \n , 使用動態網站的目的在編輯靜態網站的內容). 網站內容經過編輯之後, 必須建立新的網站內容 (使用 generate_pages), 然後將新的網站內容更新到對應的 Github 倉儲中 (稱為改版, 其過程經歷 git add, git commit 與 git push 等階段).\n \n \n git 為分散式版次管理系統工具.\n \n \n git add\n \n \n git commit\n \n \n git push\n \n \n \n 利用 Github Classroom 給每一位學員一個倉儲, a.k. (also known as) 網站 (靜態與動態)\n \n \n 每四位學員一組建立一個協同倉儲, a.k. 協同網站 (靜態與動態)\n \n \n 靜態網站: Github Pages, Nginx (under public_html) 或 Fossil SCM (under documentation)\n \n \n 動態網站: localhost, replit or Ubuntu server\n \n \n \n 課程評分: 線上測驗 (50%), 出席、協同專案與自我評量 (50%).\n \n \n repo:\n  \n  https://github.com/mdecycu/cp2023\n  \n \n \n site:\n  \n  https://mde.tw/cp2023\n  \n \n \n 行事曆\n \n \n \n  全頁檢視\n  \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'HTML', 'text': '\n \n  https://developer.mozilla.org/zh-TW/docs/Glossary/HTML\n  \n \n \n Canvas:\n  \n  https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial\n  \n \n  add the canvas tag first  \n \n \n \n \n \n \n 上列圖形的程式碼:\n \n <!-- add the canvas tag first -->\n<p><canvas id="my_canvas" width="400" height="200"></canvas></p>\n<script>// <![CDATA[\n// Get the canvas element\n        var canvas = document.getElementById("my_canvas");\n        var ctx = canvas.getContext("2d");\n\n        // Set line properties\n        ctx.strokeStyle = "red";\n        ctx.lineWidth = 5;\n \n        // Draw the line\n        ctx.beginPath();\n        ctx.moveTo(50, 50); // Starting point coordinates (x, y)\n        ctx.lineTo(350, 150); // Ending point coordinates (x, y)\n        ctx.stroke();\n// ]]></script> \n \n HTML canvas and Javascript 練習:\n \n \n \n  請根據上列 html 與 Javascript 繪線程式的語法, 找出繪圖座標原點.\n  \n \n  請利用與上列繪圖相同粗細的藍色線條, 從繪圖座標原點出發, 畫一個長度為 200 Pixel 的正方圖形.\n  \n \n  請將上列正方形改為圓形.\n  \n \n  請將圓形中央部分塗上黃色.\n  \n \n  請利用黑色畫筆在圓形中央, 以 14 Pixel 大小的字元, 寫出"半徑 100 Pixel 的圓形"字串.\n  \n', 'tags': '', 'url': 'HTML.html'}, {'title': 'SolidJS', 'text': '\n \n  https://www.solidjs.com/\n  \n \n \n \n  https://wiki.nikiv.dev/programming-languages/javascript/js-libraries/solid\n  \n \n \n Solid is a JavaScript framework for making interactive web applications. With Solid, you can use your existing HTML and JavaScript knowledge to build components that can be reused throughout your app. Solid provides the tools to enhance your components with reactivity: declarative JavaScript code that links the user interface with the data that it uses and creates.\n \n  the first example  \n \n \n \n  the second example  \n \n \n \n \n HTML 與 Javascript 原始碼:\n \n <div id="my_div"></div>\n<script type="module">// <![CDATA[\nimport {\n        createSignal,\n        onCleanup,\n      } from "https://cdn.skypack.dev/solid-js";\n      import { render } from "https://cdn.skypack.dev/solid-js/web";\n      import html from "https://cdn.skypack.dev/solid-js/html";\n\n      const App = () => {\n        const [count, setCount] = createSignal(0),\n          timer = setInterval(() => setCount(count() + 1), 1000);\n        onCleanup(() => clearInterval(timer));\n        return html`<div>${count}</div>`;\n        // or\n        return h("div", {}, count);\n      };\n      render(App, document.getElementById("my_div"));\n// ]]></script> \n \n', 'tags': '', 'url': 'SolidJS.html'}, {'title': 'github', 'text': '\n Alternatives:\n \n \n Gitlab:\n  \n  https://about.gitlab.com/pricing/\n  \n \n \n Bitbucket:\n  \n  https://www.atlassian.com/software/bitbucket/pricing\n  \n \n \n Others:\n  \n  https://www.softwaretestinghelp.com/github-alternatives/\n  \n \n \n \n  何謂 github?\n  \n \n \n GitHub 是一個基於 Git 版本控制系統的網站和平台，它提供了存儲、管理和共享程式碼的功能。以下是一個簡單的解釋，可用於向初學者解釋 GitHub：\n  \n \n GitHub 是一個網站，讓開發人員能夠儲存和共享他們的程式碼。程式碼是開發軟體的重要組成部分，它是一系列指令和指示，告訴電腦要執行什麼操作。在開發軟體時，通常會有多個人一起工作，每個人都會寫不同的程式碼，並且有時候需要整合彼此的工作。\n  \n \n GitHub 的用途就是讓開發人員能夠輕鬆地共享他們的程式碼並協同工作。當您在 GitHub 上創建一個倉儲（Repository），您可以將您的程式碼上傳到該倉儲中。其他人可以訪問並查看您的程式碼，也可以為您的項目做出貢獻，提出問題或提供改進意見。\n  \n \n GitHub 提供了許多功能，例如問題追蹤、合併請求（Pull Requests）、版本控制和分支管理。這些功能使得多人協同開發變得更加容易和有組織。您可以在倉儲中追蹤問題和錯誤，查看和審核其他人提交的更改，並在不影響主要程式碼的情況下進行分支開發和測試。\n  \n \n 總結來說，GitHub 是一個在網路上存儲和共享程式碼的平台，使得開發人員能夠協同工作、追蹤問題和進行版本控制。它是一個廣泛使用的工具，用於開源項目、商業軟體開發和各種其他程式碼相關的任務。\n', 'tags': '', 'url': 'github.html'}, {'title': 'Github Pages', 'text': '\n GitHub Pages 是 GitHub 提供的一項功能，它可以讓您輕鬆地建立和發佈自己的網站。以下是一個簡單的說明，可用於向初學者解釋 GitHub Pages：\n  \n \n GitHub Pages 是一個功能，讓您能夠將您的網站部署到網路上，並透過 GitHub 托管它。如果您正在學習建立網站，或者希望在網路上展示您的專案、筆記、部落格或其他靜態內容，GitHub Pages 是一個很好的選擇。\n  \n \n 使用 GitHub Pages 的好處在於它的簡單性和免費性。您可以將您的網站原始碼（例如 HTML、CSS 和 JavaScript 文件）上傳到 GitHub 上的特定倉儲（Repository）。然後，GitHub Pages 會自動處理網站的構建和發佈，並將您的網站託管在 GitHub 的伺服器上。\n  \n \n 透過 GitHub Pages，您可以輕鬆地分享您的網站給他人查看。只需在特定的倉儲中創建一個名為 "username.github.io" 的倉儲（其中 "username" 是您的 GitHub 用戶名），然後將您的網站內容放在該倉儲中。您的網站將會在 "https://username.github.io" 的網址上可供訪問。\n  \n \n 您可以使用 GitHub Pages 來展示您的專案、個人網站、筆記或其他靜態內容。只需將網站文件推送到您的 GitHub 倉儲，然後在網路上即可訪問。此外，您可以根據需要自定義網站的佈局、風格和內容。\n  \n \n 總結來說，GitHub Pages 是一個方便且免費的方式，讓您能夠輕鬆地建立和發佈自己的網站。只需將網站文件上傳到 GitHub 上的特定倉儲，GitHub Pages 將會處理網站的構建和發佈，並提供一個網址供他人訪問您的網站。無論您是學習網站開發還是展示您的專案，GitHub Pages 都是一個非常實用的工具。\n', 'tags': '', 'url': 'Github Pages.html'}, {'title': 'git commands', 'text': '\n \n  SourceTree.7z\n  \n \n \n 以下資訊為與 ChatGPT 對話的內容:\n \n \n \n  使用 git 的常見情境與對應指令有哪些?\n  \n \n \n 在使用 Git 的過程中，有一些常見的情境和對應的指令。以下是一些常見情境以及相應的 Git 指令：\n  \n \n 1. 初始化一個新的儲存庫：\n  \n - "git init"：在當前目錄中初始化一個新的 Git 儲存庫。\n  \n \n 2. 複製（Clone）一個遠端儲存庫：\n  \n - "git clone <儲存庫URL>"：複製一個遠端儲存庫到本地。\n  \n \n 3. 提交（Commit）更改：\n  \n - "git add <文件>"：將文件添加到暫存區。\n  \n - "git commit -m "提交訊息""：將暫存區的更改提交到本地儲存庫。\n  \n \n 4. 推送（Push）更改到遠端儲存庫：\n  \n - "git push <遠端名稱> <本地分支名稱>"：將本地分支的更改推送到遠端儲存庫。\n  \n \n 5. 拉取（Pull）遠端儲存庫的最新更改：\n  \n - "git pull <遠端名稱> <遠端分支名稱>"：從遠端儲存庫拉取最新的更改並合併到當前分支。\n  \n \n 6. 創建和切換分支：\n  \n - "git branch"：列出本地分支。\n  \n - "git branch <分支名稱>"：創建一個新的分支。\n  \n - "git checkout <分支名稱>"：切換到指定分支。\n  \n \n 7. 合併（Merge）分支：\n  \n - "git merge <分支名稱>"：將指定分支的更改合併到當前分支。\n  \n \n 8. 查看歷史記錄和狀態：\n  \n - "git log"：顯示提交歷史記錄。\n  \n - "git status"：顯示儲存庫的狀態，包括未提交的更改。\n  \n \n 9. 撤銷更改：\n  \n - "git checkout -- <文件>"：撤銷對文件的修改，恢復到最後一次提交的狀態。\n  \n - "git reset HEAD <文件>"：從暫存區中移除文件，但保留本地的修改。\n \n \n \n  請再舉一些例子:\n  \n \n \n 以下是更多的 Git 使用情境和相應的指令：\n  \n \n 1. 查看和比較更改：\n  \n - "git diff"：顯示工作目錄中未暫存的更改。\n  \n - "git diff --staged"：顯示暫存區中的更改。\n  \n \n 2. 切換分支並創建新分支：\n  \n - "git checkout -b <新分支名稱>"：創建一個新的分支並切換到該分支。\n  \n \n 3. 刪除分支：\n  \n - "git branch -d <分支名稱>"：刪除本地分支。\n  \n - "git push <遠端名稱> --delete <分支名稱>"：刪除遠端分支。\n  \n \n 4. 重新命名分支：\n  \n - "git branch -m <舊分支名稱> <新分支名稱>"：將本地分支重新命名。\n  \n \n 5. 儲存和應用工作目錄上的暫時更改：\n  \n - "git stash"：將未提交的更改儲存為一個臨時存儲，並還原工作目錄到最後一次提交的狀態。\n  \n - "git stash apply"：應用最新的臨時存儲並還原更改。\n  \n \n 6. 查看遠端儲存庫信息：\n  \n - "git remote -v"：顯示遠端儲存庫的詳細資訊，包括 URL。\n  \n \n 7. 回溯到特定的提交：\n  \n - "git checkout <提交哈希值>"：切換到指定的提交。\n  \n - "git revert <提交哈希值>"：創建一個新的提交，撤銷指定的提交所引入的更改。\n  \n \n 8. 標記和版本標籤：\n  \n - "git tag"：列出所有的標記。\n  \n - "git tag <標籤名稱>"：創建一個新的輕量級標籤。\n  \n - "git tag -a <標籤名稱> -m "標籤訊息""：創建一個包含訊息的帶注解的標籤。\n  \n \n 9. 忽略文件：\n  \n - 在儲存庫的根目錄下創建一個名為 ".gitignore" 的文件，並列出要忽略的文件和目錄的模式。\n \n \n \n  在多人協同的情況下, 與 git 有關的常見情境及指令有哪些?\n  \n \n \n \n  克隆遠端儲存庫：\n   \n  - "git clone <儲存庫URL>"：複製遠端儲存庫到本地，以便多人協同開發。\n   \n \n  2. 查看遠端儲存庫信息：\n   \n  - "git remote -v"：查看遠端儲存庫的詳細資訊，包括 URL。\n   \n \n  3. 拉取（Pull）最新更改：\n   \n  - "git pull <遠端名稱> <遠端分支名稱>"：從遠端儲存庫拉取最新的更改並合併到當前分支。\n   \n \n  4. 推送（Push）本地更改：\n   \n  - "git push <遠端名稱> <本地分支名稱>"：將本地分支的更改推送到遠端儲存庫。\n   \n \n  5. 分支操作：\n   \n  - "git branch"：列出本地分支。\n   \n  - "git branch -a"：列出所有分支，包括遠端分支。\n   \n  - "git checkout <分支名稱>"：切換到指定分支。\n   \n  - "git checkout -b <新分支名稱>"：創建一個新的分支並切換到該分支。\n   \n  - "git branch -d <分支名稱>"：刪除本地分支。\n   \n  - "git push <遠端名稱> --delete <分支名稱>"：刪除遠端分支。\n   \n \n  6. 合併（Merge）分支：\n   \n  - "git merge <分支名稱>"：將指定分支的更改合併到當前分支。\n   \n \n  7. 解決衝突（Conflict）：\n   \n  - 在合併分支時，如果遇到衝突，需要手動解決衝突。可以使用文本編輯器打開有衝突的文件，解決衝突後再執行 "git add" 和 "git commit" 來完成合併。\n   \n \n  8. 查看歷史記錄和狀態：\n   \n  - "git log"：顯示提交歷史記錄。\n   \n  - "git status"：顯示儲存庫的狀態，包括未提交的更改。\n   \n \n  9. 追蹤遠端分支：\n   \n  - "git checkout --track <遠端名稱>/<遠端分支名稱>"：創建一個本地分支並追蹤遠端分支。\n   \n \n  10. 拉取特定的遠端分支到本地：\n   \n  - "git fetch <遠端名稱> <遠端分支名稱>:<本地分支名稱>"：從遠端儲存庫拉取特定分\n  \n', 'tags': '', 'url': 'git commands.html'}, {'title': 'git add', 'text': '\n git add, git commit 與 git push 相關議題.\n \n \n 詢問\n  \n  ChatGPT\n  \n :\n \n \n \n  如何向初學者說明 Git 指令中的 git add?\n  \n \n \n 當向初學者解釋 Git 指令中的 "git add" 時，可以使用以下方式進行說明：\n  \n \n "git add" 是 Git 版本控制系統中的一個指令，它的主要功能是將文件的更改加入到 Git 的暫存區（或稱為索引）中。在 Git 中，暫存區是一個重要的概念，它允許你將要提交的文件更改分開處理。\n  \n \n 以下是一個對 "git add" 的解釋：\n  \n \n 1. "git add" 是一個用於指示 Git 追蹤和紀錄文件更改的指令。\n  \n 2. 當你對文件做出修改後，Git 並不會自動將這些更改紀錄下來。相反，你需要使用 "git add" 將更改添加到暫存區。\n  \n 3. 暫存區是一個中間階段，它允許你選擇性地將特定文件或特定文件的更改紀錄下來，而不是將所有更改都直接提交到 Git 儲存庫。\n  \n 4. 使用 "git add" 指定要加入暫存區的文件或文件夾，例如 "git add filename" 或 "git add foldername"。\n  \n 5. 一旦你使用 "git add" 將文件更改添加到暫存區，Git 就會開始跟蹤這些更改，並準備將它們包含在下一次的提交中。\n  \n \n 簡而言之，"git add" 是一個將文件更改紀錄下來並加入到 Git 暫存區的指令。這樣可以讓你選擇性地將特定的更改提交到版本控制系統中，而不是一次性提交所有更改。這樣可以提供更大的靈活性和精細的控制，並使版本控制更具效率。\n \n \n 再問:\n \n \n \n  何謂 Git 暫存區（或稱為索引）?\n  \n \n \n Git 暫存區（或稱為索引）是 Git 版本控制系統中的一個重要概念，它在版本控制的過程中扮演了關鍵的角色。以下是對 Git 暫存區的解釋：\n  \n \n 1. 暫存區是一個位於 Git 儲存庫中的中間區域。它用於暫時存放文件的更改，這些更改將在下一次提交（commit）時納入版本控制。\n  \n 2. 當你對文件進行修改時，Git 不會自動將這些更改紀錄下來。相反，你需要使用 "git add" 將更改添加到暫存區。\n  \n 3. 暫存區可以理解為一個緩衝區，它允許你選擇性地將特定文件或特定文件的更改分開處理，而不是將所有更改都直接提交到儲存庫。\n  \n 4. 在進行 "git commit" 提交操作時，Git 會將暫存區中的文件快照（snapshot）記錄為一個新的提交。這樣的好處是你可以按照需要對更改進行分組，而不必一次性提交所有更改。\n  \n 5. 使用暫存區可以提供更大的靈活性和精細的控制，因為你可以檢查即將提交的更改，並在提交之前對其進行調整或分離。\n  \n \n 簡而言之，暫存區是 Git 版本控制系統中用於存放即將提交的文件更改的區域。它允許你選擇性地將特定文件或特定文件的更改紀錄下來，並在進行提交之前對其進行調整。這樣的機制提供了更大的彈性和細粒度的控制，幫助你更有效地管理和追蹤文件的變更。\n \n \n 再問:\n \n \n \n  Git 暫存區是在倉儲的哪個地方, 資料會一直存在還只是暫存?\n  \n \n \n Git 暫存區（或稱為索引）是存放在 Git 儲存庫中的一個特殊文件，而不是存放在特定的目錄中。它是儲存庫的一部分，位於 ".git" 目錄中。暫存區本身並不是一個單獨的物理位置，而是儲存庫中的一個特定狀態。\n  \n \n 資料在暫存區中只是暫時存在，並不會永久保存。當你對文件進行 "git add" 操作，Git 會將相應的更改紀錄到暫存區中。這些更改在提交之前只存在於暫存區，並且可以隨時進行修改或取消。\n  \n \n 一旦你執行 "git commit" 命令提交更改，Git 將會根據暫存區中的內容創建一個新的提交（commit），並將該提交保存到儲存庫的歷史記錄中。這樣的提交會持久保存，成為了儲存庫的一部分。暫存區在每次提交後都會被清空，準備接收下一次更改。\n  \n \n 因此，暫存區是一個用於暫時保存更改的區域，當你準備好提交這些更改時，它們將被永久記錄到儲存庫中。資料在暫存區中並不是永久存在的，而是在提交前的過程中的一個臨時階段。\n \n \n 再問:\n \n \n \n  何謂提交?\n  \n \n \n 在版本控制系統（如Git）中，"提交"（commit）是指將文件或代碼更改保存到儲存庫的歷史記錄中的操作。提交創建了一個新的快照（snapshot），記錄了儲存庫在某個時間點上的狀態。以下是對提交的解釋：\n  \n \n 1. 提交是版本控制系統中的重要概念，它表示你希望將文件或代碼更改永久地保存到儲存庫中。\n  \n 2. 當你對文件進行修改並滿意結果後，可以使用 "git add" 命令將更改添加到 Git 的暫存區（或索引）中。\n  \n 3. 一旦你將所有需要提交的更改都添加到暫存區中，可以使用 "git commit" 命令來創建一個新的提交。\n  \n 4. 提交是一個具有唯一標識（commit hash）的快照，它記錄了儲存庫在提交時的狀態，包括被更改的文件和它們的內容。\n  \n 5. 每個提交都可以包含一個相關的提交消息（commit message），用於描述這個提交所做的更改、修復的問題或任何相關信息。\n  \n 6. 提交的歷史記錄是順序的，每次提交都建立在前一個提交的基礎之上，形成一個有向無環圖（DAG）結構。\n  \n 7. 提交的歷史記錄使你能夠追蹤和恢復過去的更改，合作和協調工作，以及進行分支和合併操作等。\n  \n \n 提交在版本控制中扮演著關鍵的角色，它確保了文件更改的持久性和可追蹤性。通過進行提交，你可以記錄並保留儲存庫在不同時間點上的狀態，並隨時查看、比較和回溯到過去的版本。\n \n \n 再問:\n \n \n \n  當使用者執行 git add . 之後,\xa0 git.exe 具體做了甚麼動作?\n  \n \n \n 當使用者執行 "git add ." 命令後，"git.exe" 會執行以下動作來處理這個指令：\n  \n \n 1. "git.exe" 會分析目前工作目錄中的所有更改，包括修改的文件和新建的文件。\n  \n 2. 它會將這些更改的文件路徑和內容紀錄到 Git 儲存庫的暫存區中。暫存區實際上是一個特殊的 Git 檔案，位於 ".git" 目錄中，用於記錄即將提交的更改。\n  \n 3. 如果有新的文件被添加到工作目錄中，它們將被添加到暫存區。對於已經存在的文件，它會比對工作目錄中的版本和暫存區中的版本之間的差異，並將這些差異紀錄到暫存區中。\n  \n 4. "git.exe" 會為每個被添加到暫存區的文件生成一個 SHA-1 雜湊值，用於唯一識別文件的內容。\n  \n 5. 在將文件的內容和元資料紀錄到暫存區後，"git.exe" 完成了 "git add ." 的操作。\n  \n \n 總結來說，"git add ." 命令告訴 "git.exe" 將所有更改的文件路徑和內容紀錄到 Git 的暫存區中，準備進行提交。這樣可以將更改分開處理，提供了更大的彈性和控制，讓你能夠選擇性地提交特定的更改，而不是一次性提交所有更改。\n \n \n 再問:\n \n \n \n  甚麼是文件的 SHA-1 雜湊值?\n  \n \n \n SHA-1（Secure Hash Algorithm 1）雜湊值是一種密碼學演算法，用於將數據（例如文件或消息）轉換為固定長度的唯一字串。在 Git 中，文件的 SHA-1 雜湊值是使用 SHA-1 算法計算出的 40 個字符的字串，用於唯一識別文件的內容。\n  \n \n 以下是文件的 SHA-1 雜湊值的一些特點和作用：\n  \n \n 1. 唯一性：SHA-1 算法通過將文件的內容轉換為唯一的雜湊值，確保不同文件具有不同的雜湊值。即使文件的內容只有微小的差異，其雜湊值也會完全不同。\n  \n 2. 固定長度：SHA-1 雜湊值始終為 40 個字符，無論文件的大小。這使得雜湊值的長度在不同大小的文件中保持一致。\n  \n 3. 安全性：SHA-1 是一個具有強大加密性能的雜湊算法。它對於碰撞（collision）攻擊的抵抗力相對較強，碰撞攻擊是指找到兩個不同的文件，它們的雜湊值相同。然而，由於 SHA-1 已經被認為不再足夠安全，因此在某些安全敏感的應用中已經被更強的雜湊算法（如 SHA-256）所取代。\n  \n \n 在 Git 中，每個文件的內容都會被計算出一個唯一的 SHA-1 雜湊值。這個雜湊值用於識別文件，確保文件的完整性和不易被篡改。在儲存庫中，Git 使用這些雜湊值來追蹤文件的歷史、比較文件的更改，以及進行版本控制操作。\n \n \n 再問:\n \n \n \n  如何說明密碼學演算法?\n  \n \n \n 密碼學演算法是用於處理數據的數學算法，旨在保護數據的安全性、完整性和機密性。它們使用各種數學和計算方法，以加密（加上密碼）和解密（解開密碼）的方式處理數據，使得只有擁有正確密鑰的人能夠解讀和存取數據。以下是對密碼學演算法的解釋：\n  \n \n 1. 加密：密碼學演算法使用一個密鑰（通常是一個秘密的數字、字串或文件）來對數據進行加密。加密是將原始數據轉換成看似隨機的、不可讀的格式的過程。只有使用正確的密鑰進行解密操作，才能將加密後的數據還原為原始形式。\n  \n 2. 解密：解密是使用相應的密鑰對加密數據進行反向操作，以還原出原始的、可讀的數據。只有擁有正確的密鑰的人才能夠成功解密並取得原始數據。\n  \n 3. 對稱加密：在對稱加密中，同一個密鑰用於加密和解密數據。發送者和接收者必須共享同一個密鑰，並且將其保密。常見的對稱加密演算法有 AES（Advanced Encryption Standard）和 DES（Data Encryption Standard）。\n  \n 4. 非對稱加密：在非對稱加密中，使用一對密鑰，包括公鑰和私鑰。公鑰用於加密數據，而相應的私鑰用於解密數據。公鑰可以公開分享，而私鑰必須保持秘密。常見的非對稱加密演算法有 RSA 和 ECC（Elliptic Curve Cryptography）。\n  \n 5. 雜湊函數：雜湊函數將任意大小的數據轉換成固定長度的數字串，稱為雜湊值或摘要。這個過程是單向的，無法將雜湊值還原為原始數據。雜湊函數常用於校驗數據的完整性和識別數據的唯一性，並在密碼學中用於確保\n', 'tags': '', 'url': 'git add.html'}, {'title': 'Replit', 'text': '\n 查帳號設定與權限:\n  \n  https://replit.com/account\n  \n \n \n 在 Replit 平台上學習 Python:\n  \n  https://replit.com/learn/100-days-of-python\n  \n \n \n \n 本課程共有兩種方式利用 Replit 與 Github 建立並維護網站內容, 主要的網站內容 (靜態) 都以 Github Pages 為主, 而在 Replit 所啟動的動態網站則充作網站內容編輯之用:\n \n \n 第一種方法, 在 Replit 中建立 git 倉儲與網站所需內容, 再透過 git remote add 與 git push -u 與 Github 中的空倉儲整合, 其中的 cmsimde 可以直接作為倉儲目錄或者作為倉儲的子模組:\n \n \n 登入 Replit 後, 設法建立一個倉儲與遠端 Github 上的空倉儲同步.\n \n \n 為確保使用 "main" 作為主分支名稱，可以在 "git init" 之後加上 "git branch -m main" 指令。這將會將預設的分支名稱從 "master" 改為 "main"。操作流程如下：\n  \n \n 1. 在 Replit 的終端機（Terminal）中，確定您目前所在的目錄是您想要作為 Git 倉儲的目錄。如果不是，您可以使用 "cd" 指令切換到正確的目錄。\n  \n \n 2. 初始化 Git 倉儲：\n  \n - 執行指令 "git init"：這會在目前的目錄下初始化一個新的 Git 倉儲。\n  \n \n 3. 將預設分支名稱改為 "main"：\n  \n - 執行指令 "git branch -m main"：這將把預設分支從 "master" 改為 "main"。\n  \n \n 4. 連結到 GitHub 倉儲：\n  \n - 在 GitHub 上創建一個空的倉儲（Repository），並取得該倉儲的 URL。\n  \n - 在終端機中，執行指令 "git remote add origin <GitHub倉儲URL>"：這會將您的本地倉儲與 GitHub 倉儲連結起來。\n  \n \n 5. 設定提交身分：\n  \n - 在 Replit 的右側窗格中，點擊「Secrets」選項卡。\n  \n - 在「Environment variables」區域，設定一個名為 "GIT_COMMITTER_NAME" 的變數，並設定您的名字。\n  \n - 設定一個名為 "GIT_COMMITTER_EMAIL" 的變數，並設定您的郵件地址。\n  \n \n 6. 將本地的更改提交到 GitHub：\n  \n - 執行指令 "git add ."：將所有更改添加到暫存區。\n  \n - 執行指令 "git commit -m "Initial commit""：將更改提交到本地儲存庫。\n  \n - 執行指令 "git push -u origin main"：將本地的更改推送到 GitHub 倉儲。\n  \n \n 現在，您的本地 Git 倉儲和 GitHub 上的倉儲已經連結起來，並且已設定提交身分，同時使用 "main" 作為主分支名稱。您可以在 Replit 上進行更改、提交和推送，並保持與 GitHub 上的倉儲同步。\n \n \n 第二種方法則是在 Github 先建立好網站倉儲, 可以將 cmsimde 作為倉儲目錄或者作為子模組, 並利用 Github Pages 伺服倉儲中的靜態網站 (也就是 content 目錄中的超文件), 之後再將倉儲 import 進入 Replit 執行倉儲中的動態網站進行內容的編輯與改版.\n \n \n 注意: 利用 Replit 維護 Github 倉儲時, git add 與 git commit 必須透過 Tools 中的 Git 頁面完成, 然後 git push 則可以在 Git 頁面或 Shell 頁面執行 git push.\n', 'tags': '', 'url': 'Replit.html'}, {'title': '英文單字', 'text': '\n 2016 年出版的\n  \n  Programming with Python\n  \n \n \n 書中收集 2244 個英文\n  \n  單字出現次數\n  \n , 以及各單字的\n  \n  查詢頁面\n  \n .\n \n \n 延伸專題:\n \n \n 根據上列網頁英文單字查詢結果, 是否能利用 Python 將查詢結果取出, 並與各英文單字結合, 成為之後的線上研習網頁?\n \n \n 從英文教科書中統計各單字出現字數的程式 (檔案存在 Github 帳號對應的 Gist 倉儲):\n \n \n 先利用\n  \n \n   extract_text_from_pdf_file.py\n   \n \n 將 pdf 檔案中的 text 取出.\n \n \n 然後再利用\n  \n \n   check_vocabulary_from_cdict_net.pdf\n   \n \n 查詢各英文單字的中文與英文解釋.\n \n \n 假如導入\n  \n \n \n  pybean.py\n  \n \n \n 與\n  \n \n \n  SQLite\n  \n \n \n 資料庫, 則可以利用\n  \n \n \n  check_dictionary_save_into_sqlite.py\n  \n \n \n 將 10821 個常見的英文單字的中英文說明與例句存入資料庫 (\n  \n  cp2021_textbook_vocabulary_10821.sqlite\n  \n ).\n \n \n \n 2015 年出版的\n  \n  Beginning Windows 10\n  \n 書中收集的 3264 個\n  \n  英文單字出現次數\n  \n 與各單字的\n  \n  查詢頁面\n  \n .\n \n \n 2022 年出版的\n  \n  Windows 11 Made Easy\n  \n 書中收集的 1432\n  \n  個\n  \n \n  英文單字出現次數\n  \n \n  與各單字的\n  \n \n  查詢頁面\n  \n \n  .\n  \n', 'tags': '', 'url': '英文單字.html'}, {'title': 'Computer', 'text': "\n 我們對電腦軟硬體有多少認識? 從學習計算機程式、網際內容管理、電腦輔助設計與實習到協同產品設計實習的過程中, 該如何應用電腦? (眼前的桌上型電腦、筆記型電腦、平板、手機與各種為控制器)\n \n \n Physical and Virtual PC (VmWare, Hyper-V,\n  \n  Virtualbox\n  \n , Parallels)\n \n \n Operating Systems:\n \n \n Windows\n \n \n Ubuntu\n \n \n Network:\n \n \n Internet\n \n \n The internet represents a global network of interconnected computer systems that facilitates the exchange of information and data across physical borders. This technology has emerged as one of the most significant inventions of modern times, transforming the way we communicate, conduct commerce, and access information.\n  \n \n At its core, the internet comprises millions of connected computing systems and servers, linked together through a sophisticated architecture of routers, switches, and other networking components. It enables users to access a diverse range of digital resources, including email, social media platforms, online shopping, and entertainment services.\n  \n \n The internet operates on a standardized set of protocols, such as Transmission Control Protocol/Internet Protocol (TCP/IP), which regulates the flow of data across the network. This allows computing devices, regardless of their location or operating system, to communicate and exchange information seamlessly.\n  \n \n The internet has brought about a significant transformation in many aspects of modern life, facilitating unprecedented access to information and services. Its global reach has expanded commercial opportunities for businesses, enabling them to extend their reach beyond geographical borders. Furthermore, the internet has fostered new opportunities for collaboration and communication between people separated by distance.\n  \n \n Nevertheless, the internet's ubiquitous nature and prevalence pose new challenges, including security threats and concerns over privacy. Consequently, significant research and development efforts continue towards developing new technologies and standards to bolster the security and resilience of the internet, while safeguarding its openness and accessibility for all users.\n \n \n WWW\n \n \n The World Wide Web (WWW) is an interconnected network of digital resources, which operates as a subset of the internet, providing users with an unprecedented ability to access and share information. The WWW has emerged as one of the most transformative technological advancements of the late 20th century, revolutionizing the way individuals obtain knowledge, conduct commerce, and collaborate with others.\n  \n \n At its core, the WWW relies on standardized protocols, such as the Hypertext Transfer Protocol (HTTP), which regulate the transmission and retrieval of web resources across the internet. Web servers host these resources, which clients typically access through a web browser.\n  \n \n The WWW has significantly impacted modern society, enabling individuals and businesses to share information and connect with others on a global scale. Through the WWW, users have access to an extensive range of digital resources, including web pages, multimedia content, and online services. The WWW has facilitated the globalization of commerce and expanded educational opportunities for learners around the world.\n  \n \n However, the WWW also presents new challenges, including concerns regarding privacy, security, and the spread of misinformation. As such, significant research and development efforts continue to focus on enhancing the security and reliability of the web, while preserving its openness and accessibility for all users.\n \n \n Git distributed version control system:\n \n \n \n  git_essential_document.7z\n  \n (password protected for cp2023)\n \n \n Git is a distributed version control system (VCS) designed for software development, providing a reliable and efficient means for managing source code and enabling collaborative development workflows. Developed by Linus Torvalds in 2005, it has since emerged as a widely adopted VCS, with a rich set of features and powerful tools for managing complex codebases.\n  \n \n Git allows developers to track changes to their codebase over time, by creating and maintaining a history of all modifications made to files and directories. It provides a decentralized architecture, where each developer has their own local copy of the repository, which can be synced with remote repositories, such as those hosted on GitHub or GitLab.\n  \n \n Git's robust set of features includes branching and merging, which enable developers to create isolated copies of the codebase, work on new features or bug fixes, and then merge those changes back into the main codebase when ready. This allows developers to experiment with new ideas and features, without disrupting the overall stability of the codebase.\n  \n \n Additionally, Git provides tools for resolving conflicts that may arise when multiple developers are working on the same codebase. It supports a wide range of workflows, including peer code review, continuous integration, and deployment, which enhance collaboration and productivity.\n  \n \n In conclusion, Git represents a key technology in modern software development, offering a flexible, scalable, and reliable means for managing codebases and enabling collaborative workflows. Its widespread adoption across the industry attests to its robustness and effectiveness in handling complex software development tasks.\n \n \n", 'tags': '', 'url': 'Computer.html'}, {'title': 'Environment', 'text': '\n 所處網路環境:\n \n \n Windows: ipconfig /all\n \n \n Ubuntu: ifconfig (need to install net-tools first: sudo pip install net-tools)\n \n \n IPv4 或(與) IPv6 網路環境\n \n \n 相關影響:\n \n \n git push (through https or SSH)\n \n \n web browser (www servers in IPv4 or(and) IPv6, protocol in http or https)\n \n \n program execution (set http_proxy and https_proxy environment variables)\n \n \n SSH to remote server (through proxy server or not through proxy server)\n \n \n \n  2016 Practical IPv6 for Windows Administrators\n  \n \n \n \n  2020\xa0Learn Windows Subsystem for Linux\n  \n', 'tags': '', 'url': 'Environment.html'}, {'title': 'Ubuntu', 'text': '\n \n  https://en.wikipedia.org/wiki/Ubuntu\n  \n (Debian based)\n \n \n Alternatives:\n \n \n \n  https://almalinux.org/\n  \n (\n  \n  RHEL\n  \n based)\n', 'tags': '', 'url': 'Ubuntu.html'}, {'title': 'Mobile', 'text': '\n \n  https://flutter.dev/\n  \n', 'tags': '', 'url': 'Mobile.html'}, {'title': 'Javascript', 'text': '\n 瀏覽器就是你的計算機程式環境\n \n \n \n  http://jsforcats.com/\n  \n (貓咪學 JavaScript)\n \n \n \n  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide\n  \n \n \n \n  https://eloquentjavascript.net/\n  \n \n \n 利用 Javascript 寫的 CAD:\n  \n  https://openjscad.xyz/\n  \n \n \n 目前的 cmsimde 可以直接在線上編輯 blog, 若 SStatic 出現問題, 可以連同在伺服器中啟動的主程式一併移除:\n \n \n 假設希望移除使用 8445 port 的應用程式:\n \n sudo kill -9 `sudo lsof -t -i:8445` \n \n \n \n', 'tags': '', 'url': 'Javascript.html'}, {'title': 'Brython', 'text': '\n Question1:\n \n \n 利用 Brython 協助 markdown_form 編寫 Pelican blog 原始檔案.\n \n \n Question2:\n \n \n 利用 Brython 能否用來建立一個線上 Reveal.js 網際簡報系統編輯器?\n \n \n Question3:\n \n \n 透過\n  \n  PyWeb3d\n  \n (\n  \n  on Github\n  \n ), 能不能利用 Brython 建立一個 3D 的貪食蛇或俄羅斯方塊?\n \n \n Alternatives:\n \n \n \n  https://pyscript.net/\n  \n \n \n Brython 是一個讓您可以使用 Python 程式語言在瀏覽器中執行的工具。以下是一個簡單的說明，可用於向初學者解釋 Brython：\n  \n \n Brython 是 "Browser Python" 的縮寫，它是一個專為瀏覽器設計的 Python 執行環境。Python 是一個簡潔易讀且強大的程式語言，而 Brython 讓您能夠直接在瀏覽器中運行 Python 程式碼，而不需要任何額外的安裝或設定。\n  \n \n 使用 Brython，您可以在網頁上編寫 Python 程式碼，並在瀏覽器中執行。這對於學習 Python 或在網頁上進行簡單的動態互動非常有用。您可以編寫各種功能，例如計算器、遊戲、表單驗證等等，並在瀏覽器中立即查看結果。\n  \n \n Brython 的優勢之一是它提供了與標準 Python 類似的語法和功能。這意味著您可以使用您已經熟悉的 Python 語法來編寫瀏覽器腳本，而不需要學習其他語言或概念。它支援大部分的 Python 3 語法和標準庫，這讓您可以使用許多內建函式、資料結構和模組。\n  \n \n 使用 Brython，您可以將 Python 程式碼直接放在網頁的 "<script type=\'text/python\'>" 標籤中，或者使用外部腳本檔案引入。Brython 會解析並執行您的 Python 程式碼，並將結果顯示在網頁上。\n  \n \n 總結來說，Brython 是一個讓您在瀏覽器中運行 Python 程式碼的工具。它使得在網頁上使用 Python 變得容易，並提供了與標準 Python 相似的語法和功能。如果您想要在網頁上進行簡單的動態互動或學習 Python，Brython 是一個很好的選擇。\n \n \n \n  https://stackabuse.com/an-introductory-guide-to-brython/\n  \n \n \n \n  https://www.geeksforgeeks.org/introduction-to-brython/\n  \n \n \n \n  https://realpython.com/brython-python-in-browser/\n  \n \n \n \n cmsite: wcms use\n  \n  https://github.com/mdecycu/cmsimde\n  \n as submodule\n \n \n \n  https://en.wikipedia.org/wiki/Python_(programming_language)\n  \n \n \n Examples:\n \n \n \n  https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d\n  \n \n \n \n  https://www.geeksforgeeks.org/python-programming-examples/\n  \n \n \n \n  https://www.programiz.com/python-programming/examples\n  \n \n \n \n  https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/\n  \n \n \n Python Tutorial:\n \n \n \n  https://docs.python.org/3/tutorial/\n  \n \n \n \n  An informal introduction to Python\n  \n \n \n Indentation\n \n \n Variables\n \n \n Comments\n \n \n \n  Numbers\n  \n \n \n \n  Strings\n  \n \n \n print\n \n \n \n  Python control flow tools\n  \n \n \n \n  for\n  \n \n \n \n  if\n  \n \n \n \n  range\n  \n \n \n open\n \n \n read\n \n \n \n  lists\n  \n \n \n \n  tuples\n  \n \n \n \n  dictionaries\n  \n \n \n \n  functions\n  \n \n \n \n  try ... except\n  \n \n \n \n  break\n  \n \n \n \n  pass\n  \n \n \n \n  classes\n  \n \n \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 (\n  \n  practice_html.txt\n  \n 動態頁面超文件).\n \n \n \n  practice_html.txt\n  \n 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用.\n \n \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為\n  \n  class\n  \n 後, 在範例導入時透過\n  \n  instance\n  \n 引用.\n \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n \n 從 1 累加到 100:\n \n \n \n  1 add to 100\n  \n \n \n 將 iterable 與 iterator\n  \n  相關說明\n  \n , 利用 Brython 與 Ace Editor 整理在這個頁面.\n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n \n  add 1 to 100 結束 \n \n  editor1 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n \n \n  存擋表單開始  \n \n \n \n  Filename:\n   \n  .py\n  \n \n \n \n  存擋表單結束  \n \n \n \n \n  執行與清除按鈕開始  \n \n \n \n  Run\n  \n \n  Output\n  \n \n  清除輸出區\n  \n \n  清除繪圖區\n  \n \n  Reload\n  \n \n \n  執行與清除按鈕結束  \n \n \n \n \n  程式執行 ouput 區  \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n  editor1 結束  \n \n  ##########################################  \n \n 從 1 累加到 100 part2:\n \n \n \n  1 add to 100\n  \n \n  cango_three_gears\n  \n \n  BSnake\n  \n \n  AI Tetris\n  \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n  add 1 to 100 part2 開始  \n \n \n \n  add 1 to 100 part2 結束 \n \n  editor2 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n \n \n  存擋表單開始  \n \n \n \n  Filename:\n   \n  .py\n  \n \n \n \n  存擋表單結束  \n \n \n \n \n  執行與清除按鈕開始  \n \n \n \n  Run\n  \n \n  Output\n  \n \n  清除輸出區\n  \n \n  清除繪圖區\n  \n \n  Reload\n  \n \n \n  執行與清除按鈕結束  \n \n \n \n \n  程式執行 ouput 區  \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n  editor2 結束  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Python', 'text': '\n 在 Replit 平台上學習 Python:\n  \n  https://replit.com/learn/100-days-of-python\n  \n \n \n \n \n  https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf\n  \n \n \n \n  https://python.swaroopch.com/\n  \n \n \n \n  https://github.com/wenbindu/ThinkPython2-CN\n  \n \n \n \n  https://automatetheboringstuff.com/2e/chapter0/\n  \n \n \n \n  https://utokyo-ipp.github.io/IPP_textbook.pdf\n  \n (\n  \n  web\n  \n )\n \n \n Flask based:\n \n \n \n  https://github.com/mdecycu/cmsimde\n  \n \n \n PyQt based:\n \n \n \n  https://github.com/leo-editor/leo-editor\n  \n \n \n \n  https://github.com/KmolYuan/Pyslvs-UI\n  \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Portable Python', 'text': '\n 何謂可攜式 Python 程式環境?\n \n \n Python 程式是如何執行的?\n \n \n 首先 Python 是一種解譯式 (Interpreted) 程式語言, 與 C 或 C++ 程式語言最大的差別是, C/C++ 程式碼通常必須透過編譯 (Compile) 與連結 (Link) 的過程, 將原始碼轉為可執行的格式 (在 Windows 操作系統為 .exe 檔案), 而 Python 程式寫好後, 可以直接利用解譯器執行, 使用者不需要手動執行程式碼的編譯, 而是由解譯器在執行前即時將程式碼轉換為可執行檔案.\n \n \n 在\n  \n \n \n  geeksforgeeks 網站\n  \n , 以下列敘述說明 Python 程式如何執行:\n \n \n Python is an object-oriented programming language like Java. Python is called an interpreted language. Python uses code modules that are interchangeable instead of a single long list of instructions that was standard for functional programming languages. The standard implementation of python is called "cpython". It is the default and widely used implementation of Python.\n \n \n Python doesn’t convert its code into machine code, something that hardware can understand. It actually converts it into something called byte code. So within python, compilation happens, but it’s just not into a machine language. It is into byte code (.pyc or .pyo) and this byte code can’t be understood by the CPU. So we need an interpreter called the python virtual machine to execute the byte codes\n \n \n 針對 Python 程式的"編譯"過程, 則\n  \n  說明如下\n  \n :\n \n \n The Python program is converted into byte code. Byte code is a fixed set of instructions that represent arithmetic, comparison, memory operations, etc. It can run on any operating system and hardware. The byte code instructions are created in the .pyc file. The .pyc file is not explicitly created as Python handles it internally but it can be viewed with the following command:\n \n \n Y:\\tmp\\python_ex>python -m py_compile hello.py\n \n \n -m and py_compile represent module and module name respectively. This module is responsible to generate .pyc file. The compiler creates a directory named \xa0__pycache__ where it stores the hello.cpython-39.pyc file (若採用 Python 3.9 版次的編譯器).\n \n \n 至於針對 Python 程式的"解譯"執行過程, 則\n  \n  說明如下\n  \n :\n \n \n The next step involves converting the byte code (.pyc file) into machine code. This step is necessary as the computer can understand only machine code (binary code). Python Virtual Machine (PVM) first understands the operating system and processor in the computer and then converts it into machine code. Further, these machine code instructions are executed by processor and the results are displayed.\n \n \n However, the interpreter inside the PVM translates the program line by line thereby consuming a lot of time. To overcome this, a compiler known as Just In Time (JIT) is added to PVM. JIT compiler improves the execution speed of the Python program. This compiler is not used in all Python environments like CPython which is standard Python software.\n \n \n To execute the hello.cpython-39.pyc we can use the following command:\n \n \n Y:\\tmp\\python_ex>python __pycache__\\hello.cpython-39.pyc\n \n \n 至於有關 python.exe 與 pythonw.exe 的差別, 則參見\n  \n  這裡的說明\n  \n . 至於 SciTE 設定 python.properties 中, 使用 pythonw.exe -u 表示除了採非同步 (asynchronous) 執行模式外, 同時 force the stdout and stderr streams to be unbuffered; but has no effect on stdin.\n \n \n Python 解譯器的類別:\n \n \n 最早的 Python 解譯器以 C 程式語言編寫, 稱為\n  \n \n \n  CPython\n  \n , 以 Python 編寫的 Python 解譯器稱為\n  \n \n \n  Pypy\n  \n , 以 .NET 技術編寫的 Python 解譯器稱為\n  \n \n \n  Ironpython\n  \n , 以 Java 編寫的 Python 解譯器稱為\n  \n \n \n  Jython\n  \n , 以 Javascript 編寫的 Python 解譯器稱為\n  \n \n \n  Brython\n  \n . 以 Rust 編寫的 Python 解譯器稱為\n  \n \n \n  RustPython\n  \n .\n \n \n 建立可攜 Python 程式環境的目的:\n \n \n 一般在 Windows 10 中使用\n  \n \n \n  CPython\n  \n \n \n 都是透過操作系統安裝, 將\n  \n \n \n  CPython\n  \n \n \n 解譯器登錄在操作系統的\n  \n \n \n  Registry\n  \n \n \n 中. 只不過配置在操作系統的\n  \n \n \n  CPython\n  \n \n \n 解譯器若在使用過程中, 透過\n  \n \n \n  pip\n  \n \n \n 安裝額外的模組後, 當電腦輔助設計室中的電腦重新開機後, 操作系統將會因為安裝防寫套件而恢復原先所安裝無額外模組的狀態.\n \n \n 網際內容管理與協同產品設計實習課程為了\n  \n  讓使用者可以隨身帶著\n   \n \n \n   CPython\n   \n \n \n  解譯器\n  \n , 因此繞過 Windows 10 操作系統的 Registry 登錄, 設法以批次檔案在虛擬的硬碟 (y:) 啟動\n  \n \n \n  CPython\n  \n \n \n 解譯環境.\n \n \n 此外, 配置在 USB 隨身碟的可攜\n  \n \n \n  CPython\n  \n \n \n 程式環境, 除了可執行一般 Python 程式外, 也可自行安裝所需模組, 並用於\n  \n \n \n  cmsimde\n  \n \n \n 動態與靜態網站編輯.\n \n \n 可攜程式環境中除\n  \n \n \n  CPython\n  \n , 還可配置\n  \n \n \n  MSYS2\n  \n \n \n C/C++ 編譯系統. 針對\n  \n \n \n  SciTE\n  \n ,\n  \n \n \n  Solvespace\n  \n ,\n  \n \n \n  Range3\n  \n ,\n  \n \n \n  CoppeliaSim\n  \n \n \n 等開源套件執行編譯.\n \n \n 如何建立可攜 Python 程式環境?\n \n \n 能放入 USB 隨身碟執行的 Python 程式環境包含兩個部分:\n \n \n (1) Python 解譯器系統檔案\n \n \n (2) 可攜啟動設定批次檔 (例如:\n  \n \n \n  start_ipv6.bat\n  \n )\n \n \n 要在 Windows 操作系統中, 取得各版本的 Python 解譯器系統檔案, 也有兩種方法:\n \n \n (1) 從官方網站下載安裝檔 (例如:\n  \n \n \n  3.10.5 版\n  \n 的\n  \n \n \n  python-3.10.5-amd64.exe)\n  \n , 手動安裝 Python, 取下安裝內容後, 解除安裝程式.\n \n \n (2) 利用\n  \n \n \n  gen_portable_python.py\n  \n , 從 Python 官方網站下載基本的 .msi 檔案 (例如\n  \n \n \n  3.10.5 版\n  \n 中的 core.msi, dev.msi, exe.msi, lib.msi, tcltk.msi 與 tools.msi), 然後利用\n  \n \n \n  msiexec.exe\n  \n \n \n 配合\n  \n \n \n  targetdir\n  \n \n \n 屬性解開各安裝檔.\n \n \n 以下將要結合\n  \n \n \n  SciTE\n  \n ,\n  \n \n \n  Tiny C Compiler\n  \n \n \n 與\n  \n \n \n  Python 3.10.5\n  \n , 建立一個可攜版的 CPython 與\n  \n \n \n  ANSI C\n  \n \n \n 執行環境.\n \n \n \n  從\n   \n \n \n   http://download.savannah.gnu.org/releases/tinycc/\n   \n \n \n  下載\n   \n   tcc-0.9.27-win64-bin.zip\n   \n  .\n  \n \n  從\n   \n \n \n   https://www.scintilla.org/SciTEDownload.html\n   \n \n \n  下載\n   \n \n \n   wscite521.zip\n   \n  .\n  \n \n  利用 Python 3.9.5 (或先前的 Python3 舊版可攜程式) 執行\n   \n \n \n   gen_portable_python.py\n   \n \n \n  取得 Python310 解譯器系統檔案.\n  \n \n  根據上述流程建立的基本 Python 與 ANSI C 可攜程式系統\n   \n \n \n   Portable_py310_tcc.7z\n   \n \n \n  (只能在系網路 下載, 此一 Python 解譯器只帶有基本模組且尚未安裝\n   \n \n \n   get-pip.py\n   \n  )\n  \n \n  此一 Python 解譯器以 python\n   \n \n \n   get-pip.py\n   \n \n \n  安裝 pip 後, 再以 pip install flask flask_cors bs4 lxml pelican markdown leo pyopenssl 安裝\n   \n \n \n   cmsimde 所需模組\n   \n  後, 即可用於 wcm2022 動態與靜態系統的編輯.\n  \n \n  此一 Python 解譯器再結合\n   \n \n \n   Portablegit\n   \n \n \n  與\n   \n \n \n   PUTTY\n   \n  , 就可以支援以\n   \n \n \n   SSH\n   \n \n \n  執行 github 倉儲的 git push.\n  \n \n \n 如何建立網際 Python 程式環境 (Brython)?\n \n \n 例如:\n  \n \n \n  Brython\n  \n \n \n 頁面.\n \n \n 從\n  \n \n \n  portable_python_wcm2022.7z\n  \n \n \n 下載的可攜程式環境有哪些功能?\n \n \n \n  請注意: 以下的 .7z 檔案下載, 只允許在系上網段上下載\n  \n .\n \n \n \n \n   compile_copsim_cd2022.7z\n   \n  (file size: 5 GB, extracted size: 17.3 GB, 包含除了 NX1980 之外的所有課程相關可攜程式套件, 是專門為\n   \n \n \n   cd2022\n   \n \n \n  課程學員打造的套件).\n  \n \n \n   portable_python_wcm2022.7z\n   \n \n \n  (file size: 513 MB, extracted size: 2.3 G, 這是專門為\n   \n \n \n   wcm2022\n   \n \n \n  課程打造的可攜程式套件, 適合選修學員下載後在任何 Windows 10 中以隨身碟啟動後操作)\n  \n \n \n   drive.7z\n   \n \n \n  (file size: 2.6 MB, extracted size: 10 MB, 只包含 PUTTY, tcc, wscite 與 tmp 目錄, 採用 Hybrid 方式設定, 可與目前電腦輔助設計室中 SSD 硬碟所安裝的 Python 3.9.5 與\n   \n \n \n   Portablegit\n   \n \n \n  結合, 使用者只需自行設定啟動後的 home_ipv6 目錄與 home_ipv6/Desktop 目錄後即可以最輕薄便捷的方式將 SSH key 存入隨身碟, 並將個人與分組倉儲存入隨身碟啟動後的 tmp 目錄進行操作).\n  \n \n \n 以下利用 Wink3 影片說明以 Hybrid 方式啟動的 USB 隨身碟如何建立? 以及使用上與完整 USB 隨身碟可攜程式系統的差別:\n \n \n Hybrid 可攜程式系統是只將必要檔案配置到 USB 隨身碟, 其餘檔案則使用已經存在電腦上的內容, 主要包含 Python 3.9.5 解譯程式 (863 MB) 與 Portblegit 2.31.1 (285 MB).\n \n \n Hybrid 可攜程式系統優點:\n \n \n \n  初始 USB 隨身碟只需複製 10.5 MB 的資料 (只自帶 PUTTY (4.3 MB), tcc (1.7 MB), tmp 與 wscite (4.3 MB)).\n  \n \n  使用電腦 SSD 上所安裝的 Python 與 Portablegit, 執行速度會比一般 USB 隨身碟快.\n  \n \n \n Hybrid 可攜程式系統缺點:\n \n \n \n  在未修改 Python Script 目錄中的 .exe 可執行檔之前, 必須透過 .py 執行, 例如: 命令列 中輸入 leo 並無法執行執行, 必須採用 import leo.core.runLeo;leo.core.runLeo.run()\n  \n \n  若在裝有還原卡的電腦, 未修改 Python 系統模組路徑之前, 所安裝的額外模組無法放入 USB 隨身碟中.\n  \n', 'tags': '', 'url': 'Portable Python.html'}, {'title': 'Mojo', 'text': '\n \n  MLIR Primer: A Compiler Infrastructure for the End of Moore’s Law\n  \n (\n  \n  paper\n  \n )\n \n \n \n  https://docs.modular.com/mojo/why-mojo.html\n  \n \n \n \n  https://virtualgyan.com/mojo-lang-the-new-programming-language/\n  \n \n \n \n  https://www.modular.com/mojo\n  \n \n \n \n  https://github.com/modularml/mojo\n  \n \n \n \n  https://docs.modular.com/\n  \n \n \n \n  https://docs.modular.com/mojo/programming-manual.html\n  \n \n \n', 'tags': '', 'url': 'Mojo.html'}, {'title': 'ANSI C', 'text': '\n \n  https://www.learn-c.org/\n  \n \n \n \n  https://www.programiz.com/c-programming\n  \n \n \n Arduino:\n \n \n \n  https://docs.arduino.cc/\n  \n \n \n \n  https://www.tinkercad.com/circuits\n  \n \n \n \n  https://github.com/lcgamboa/picsimlab\n  \n \n \n \n  https://wokwi.com/\n  \n \n \n \n  https://all3dp.com/2/best-arduino-simulators-online-offline/\n  \n \n \n Tiny C Compiler:\n \n \n \n  https://bellard.org/tcc/\n  \n', 'tags': '', 'url': 'ANSI C.html'}, {'title': 'PICSimLab', 'text': '\n \n  https://www.youtube.com/watch?v=be96Ds8umig\n  \n \n \n Arduino\n \n \n \n  https://github.com/lcgamboa/picsimlab\n  \n Programmable IC Simulator Laboratory\n \n \n \n  https://www.arduino.cc/en/software\n  \n Arduino IDE\n \n \n \n  https://com0com.sourceforge.net/\n  \n Null-modem Emulator\n \n \n PICSimLab 模擬 Arduino Uno (COM6) 與 Stepper Motor:\n \n \n \n \n \n \n \n \n 透過 PICSimLab Pin Viewer, 將 PB0/8, PB1/~9, PB2/~10 與 PB3/~11 與 Stepper Motor 接線.\n \n \n \n \n \n 透過 com0com 模擬 COM6 <-> COM4 連線.\n \n \n \n \n \n Arduino IDE 將 Stepper Motor 控制程式編譯後透過 COM4 經由 com0com 將程式經由 COM6 上傳到 Virtual Arduino Uno board.\n \n \n \n \n \n 接著希望可以利用 CoppeliaSim zmqRemoteAPI Python 讀取 PICSimLab 控制 Stepper Motor 的資料, 用來同步控制位於 CoppeliaSim 場景中的 Virtual Stepper Motor.\n \n \n Reference:\n \n \n \n  HoRoSim, a Holistic Robot Simulator: Arduino Code, Electronic Circuits and Physics\n  \n (\n  \n  pdf\n  \n )\n \n \n \n  scrum-1/horosim (github.com)\n  \n \n \n', 'tags': '', 'url': 'PICSimLab.html'}]};