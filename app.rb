#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

#set :datdbase, "sqlite3:pizzashop.db"
set :database, {adapter: "sqlite3", database: "pizzashop.db"}

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

get '/' do
	@products = Product.all
	erb :index
end

get '/about' do
	erb :about
end

post '/place_order' do
	@order = Order.create params[:order] # сразу создается и записывается в базу
	erb :order_placed
end

post '/cart' do
	@orders_input = params[:orders_input]
	@items = parse_orders_inpit @orders_input
					# id, cnt 
	@items.each do |item|
		item[0] = Product.find(item[0]) # id замещаем объектом
	end

	erb :cart
end

def parse_orders_inpit orders_input

	s1 = orders_input.split(/,/)
	arr = []

	s1.each do |x|
		s2 = x.split(/\=/)

		s3 = s2[0].split(/_/)

		id = s3[1]
		cnt = s2[1]
	
		arr2 = [id, cnt]	

		arr.push arr2
	end
	return arr
end