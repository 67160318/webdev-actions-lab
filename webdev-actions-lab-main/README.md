# webdev-actions-lab

เว็บไซต์พอร์ตโฟลิโอของ **คามิน ครอบบัวบาน** (รหัสนิสิต 67160318)
ทำในแลป GitHub Actions + GitHub Pages

เว็บไซต์: https://67160318-create.github.io/webdev-actions-lab/

## การ deploy

เมื่อ push เข้า branch `main` GitHub Actions (`.github/workflows/deploy.yml`) จะ deploy เว็บขึ้น GitHub Pages อัตโนมัติ

## เทคโนโลยี

HTML, CSS, JavaScript, Git, GitHub Actions, GitHub Pages

## ติดต่อ

67160318@go.buu.ac.th

## คำถามท้ายแลป

**1) GitHub Actions แตกต่างจาก GitHub Pages อย่างไร?**
Actions คือระบบรันงานอัตโนมัติ (เช่น deploy) ส่วน Pages คือบริการ host เว็บ static ให้เปิดผ่าน URL ได้ Actions ทำหน้าที่ส่งเว็บไปให้ Pages

**2) เหตุใดจึงเลือก trigger ด้วย push ที่ branch main?**
`main` คือโค้ดหลักที่พร้อมใช้งาน การ push คือจังหวะที่มีโค้ดใหม่ จึงให้ deploy อัตโนมัติ และ branch ทดลองจะไม่ไปเปลี่ยนเว็บจริง

**3) ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บไซต์จะเปลี่ยนหรือไม่?**
ไม่เปลี่ยน เพราะ GitHub ยังไม่เห็นโค้ดใหม่ Workflow จึงไม่ทำงาน ต้อง commit และ push ก่อน

**4) เหตุใด PHP + MySQL จึงรันบน GitHub Pages ไม่ได้?**
Pages ส่งได้แค่ไฟล์ static ไม่มีเซิร์ฟเวอร์ที่รัน PHP และไม่มีฐานข้อมูล MySQL

**5) ขั้นตอนค้นหาสาเหตุเมื่อ Workflow Failed**
เปิดแท็บ Actions → เลือก run ที่เป็นสีแดง → ดูว่า step ไหนล้มเหลวและอ่าน log → แก้ (เช่น YAML เยื้องผิด, path ไฟล์ผิด, ตั้งค่า Pages ไม่ถูก) → commit และ push ใหม่
