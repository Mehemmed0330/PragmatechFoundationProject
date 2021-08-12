yas = 23
while True:
    question = input("Yasinizi daxil etmek istetirsiz?he ya yox")
    if question == "he":
        addage = int(input("Yasinizi daxil edin:"))
        if addage > 23:
            ad = input("adinizi daxil edin:")
        else:
            print("Yasiniz uygun deyil....")
            break
    else:
        break
