import json


ad = input("Adiniz:")
soyad = input("Soyadiniz:")
yas = int(input("Yasiniz:"))

dict = {
    "ad": ad,
    "soyad": soyad,
    "yas": yas
}
print(dict)

user = [dict]

print(user)

user = [dict]
data = json.dumps(user)
conn = open('data.json', 'w')
conn.write(data)
