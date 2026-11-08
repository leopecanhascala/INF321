defmodule LanguageList do
  def new() do
    new_language_list = []
  end
  def add(list, language) do
    list = [language | list]
  end
  def remove(list) do
    list = tl(list)
  end
  def first(list) do
    first_item = hd(list)
  end
  def count(list) do
    num_items = length(list)
  end
  def functional_list?(list) do
    item_in_list = "Elixir" in list
  end
end
