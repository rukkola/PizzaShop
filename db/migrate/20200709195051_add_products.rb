class AddProducts < ActiveRecord::Migration[6.0]
  def change
  	Product.create :title 	=> 'Hawaiian', :description => 'This is Hawaiian pizza', :price => 100, :size => 30, :is_spicy => false, :path_to_image  => '/images/pizza1.jpg' 
  				
  	Product.create :title => 'Pepperoni', :description 	=> 'This is Pepp... pizza', :price => 200, :size => 60, :is_spicy => false, :path_to_image  => '/images/pizza2.jpg'			

  	Product.create  :title	=> 'Veg', :description => 'This is Veg pizza', :price => 150, :size	=> 30, :is_spicy => false, :path_to_image  => '/images/pizza3.jpg'			
  				
  end
end
