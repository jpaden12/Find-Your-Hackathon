from scrapy import Spider
from scrapy.selector import Selector

from hackathon.items import HackathonItem

class HackathonSpider(Spider): 
	name = "hackathon"
	allowed_domains = ["mlh.io"]
	start_urls = [
		"http://mlh.io/seasons/na-2017/events",
	]

	def parse(self, response):
		hackathons = Selector(response).xpath('//div[@class="inner"]')

		for hackathon in hackathons: 
			event = HackathonItem()
			locality = hackathon.xpath('div[@itemprop="address"]/span[@itemprop="addressLocality"]/text()').extract()[0]
			region = hackathon.xpath('div[@itemprop="address"]/span[@itemprop="addressRegion"]/text()')

			event['name'] = hackathon.xpath(
				'h3/text()').extract()[0]

			event['location'] = locality 

			event['website'] = hackathon.xpath(
				'../@href').extract()[0]
			event['MLH'] = True

			#print event['name']
			#print event['location']
			#print event['website']
			#print '\n'
			print len(hackathons)
