import requests

URL = 'https://tansik.digital.gov.eg/application/Certificates/Mo3adla/'
REQUEST = requests.get(URL + 'DefaultAFtansik.aspx').text
data = REQUEST[REQUEST.lower().find('الحدود الدنيا للقبول بالكليات والمعاهد لعام'):REQUEST.lower().find('</table>')].split('<br />')
i = 0
for x in data:
	data[i] = URL + x[x.find('href='):x.find('>', x.find('href='))].strip('href=').strip('\'').strip('\"')
	i += 1

class tnskAPI():
	yer = ''
	sys = ''
	tbl = []
	def __init__(self, pram) -> None:
		self.yer = pram.split('&')[2]
		self.sys = ('بنين' if pram.split('&')[0][0] == '1' else 'بنات') + ' ' + ('علمي' if pram.split('&')[0][4] == '1' or pram.split('&')[0][5] == '1' else 'أدبي')
		self.tbl = data
	def search(self, indx, lst) -> int:
		i = 0
		status = False
		for x in lst:
			if x.find(indx) != -1:
				status = True
				break
			i += 1
		return i if status else -1
	def years(self):
		t = []
		y = 0
		for x in self.tbl:
			t.append(self.tbl[y].split('/')[7])
			y += 1
		return t
	def print(self) -> list:
		r1 = requests.get(self.tbl[self.search(self.yer, self.tbl)])
		r1.encoding = 'utf-8'
		r1 = r1.text
		r1 = r1[r1.lower().find('<tbody'):r1.lower().find('</tbody>', r1.lower().find('<tbody'))].split('</P>')
		r1 = r1[self.search(self.sys, r1)]
		r1 = r1[r1.find('href='):r1.find('>', r1.find('href='))].strip('href=').strip('\'').strip('\"')
		u1 = self.tbl[self.search(self.yer, self.tbl)]
		u1 = u1.rstrip(u1.split('/')[len(u1.split('/')) - 1]) + r1
		r2 = requests.get(u1)
		r2.encoding = 'utf-16le'
		r2 = r2.text
		r2 = r2[r2.lower().find('<tbody'):r2.lower().find('</tbody>', r2.lower().find('<tbody'))].split('<tr>')[3:-2]
		i = 0
		for x in r2:
			r2[i] = [r2[i][r2[i].find('>', r2[i].find('>') + 1) + 1:].strip('<td align=\"center\">')[0:9], r2[i][r2[i].find('>') + 1:r2[i].find('<', r2[i].find('>'))]]
			i += 1
		if r2 == []:
			r2 = requests.get(u1)
			r2.encoding = 'utf-8'
			r2 = r2.text
			r2 = r2[r2.lower().find('<tbody'):r2.lower().find('</tbody>', r2.lower().find('<tbody'))].split('<tr>')[3:-2]
			i = 0
			for x in r2:
				r2[i] = [r2[i][r2[i].find('>', r2[i].find('>') + 1) + 1:].strip('<td align=\"center\">')[0:9], r2[i][r2[i].find('>') + 1:r2[i].find('<', r2[i].find('>'))]]
				i += 1

		return r2
	
print(tnskAPI('1001010&0&2014').print())
# R2 = []
# y = 0
# for x in T1[:3]:
#     R2.append({T1[y][0]: requests.get(T1[y][1]).text})
#     y += 1

# I2 = [
#     R1.lower().find('بيان الحدود الدنيا للشهادات العربية'),
#     R1.lower().find('</table>'),
# ]


# M : Male
# F : Female
# 3 : علمي
# 2 : أدبي

# tnsk = [
#     [
#         "2020",
#         [
#             [
#                 "M3",
#                 [
#                     _data_,
#                     ...
#                 ],
#             ],
#             [
#                 "F3",
#                 [
#                     _data_,
#                     ...
#                 ],
#             ],
#         ],
#     ],
# ]

# var string = "";
# for (let i = 1; i < document.getElementsByTagName("tbody")[2].children.length; i++)
#     string += "\t\t\t\t\t[ \"" + document.getElementsByTagName("tbody")[2].children[i].children[1].textContent + "\", \"" + document.getElementsByTagName("tbody")[2].children[i].children[0].textContent + "\" ],\n";
# console.log(string);