cipher = "yohjp iiqbm hxiex aaxbc pxlhj apdmx cbjox apcyo lbjxi yipdx yybpk pshsp iyhlx chgqo pckht blpjb lyxbc btyoh qbcyp xcshc yfcxy iqohs pyxq"

hash = {
	
	
	
	"i" => "s",
	"j" => "p",
	"y" => "t",
	"o" => "h",
	"h" => "e",
	"q" => "c",
	"b" => "o",
	"m" => "d",
	"p" => "a",
	"x" => "i",
	"s" => "m",


	"a" => "l",
	"c" => "n",
	"f" => "u",
	"e" => "z",
	"l" => "r",
	"t" => "f",
	"g" => "x",
	"k" => "g",
	"d" => "y"
}

cipher.each_char do |x|
	if hash.keys.include?(x)
		print hash[x]
	elsif x == " "
		print " "
	else
		print "_"
	end
end


# the passcode is billionaire play dino philanthropist say it 
# to a game master in exchange for a portion of the containment unit schematic