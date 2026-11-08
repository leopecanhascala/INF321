defmodule KitchenCalculator do
  def get_volume(volume_pair) do
    elem(volume_pair, 1)
  end
  def to_milliliter({:cup, volume}) do
    {:milliliter, volume * 240.0}
  end
  
  def to_milliliter({:fluid_ounce, volume}) do
    {:milliliter, volume * 30.0}
  end
  
  def to_milliliter({:teaspoon, volume}) do
    {:milliliter, volume * 5.0}
  end
  
  def to_milliliter({:tablespoon, volume}) do
    {:milliliter, volume * 15.0}
  end
  
  def to_milliliter({:milliliter, volume}) do
     {:milliliter, volume}
  end
  def from_milliliter({:milliliter, value}, :cup) do
    {:cup, value/240}
  end
  def from_milliliter({:milliliter, value}, :fluid_ounce) do
    {:fluid_ounce, value/30}
  end
  
  def from_milliliter({:milliliter, value}, :teaspoon) do
    {:teaspoon, value/5}
  end
  
  def from_milliliter({:milliliter, value}, :tablespoon) do
    {:tablespoon, value/15}
  end
  
  def from_milliliter({:milliliter, value}, :milliliter) do
    {:milliliter, value}
  end
  
  def convert(tuple, unit) do
    in_milliliter = to_milliliter(tuple)
    from_milliliter(in_milliliter, unit)
  end
end
