// character icons state
$(document).ready(function () {
    $('#char1').css('opacity', 1);

    $('#char1').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Isabel');
        $('p').text('The only survivor of a village destroyed during a dark ritual. \
        Isabel barely exorcised the evil spirit but part of it still lingers \
        with her arms. Since then, she travels the world to find a cure while \
        fighting the evil spirit for control of her body. ');

        $('.character-image').css('left', '60%');
        $('.character-image').attr('src', '../Assets/img/bg/katalina.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/katalina.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/katalina/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/katalina/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/katalina/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/katalina/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/katalina/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/katalina/superskyboundart-thumb.jpg');
    });

    $('#char2').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Abel');
        $('p').text('A prince who inherited the throne with the help of a noble priest. \
        His reign was short-lived, as his opponents performed a nefarious ritual to steal his soul. \
        The priest advised him to go to the Neth Empire in search of help, \
        but he is little more than a puppet. ');

        $('.character-image').css('left', '63%');
        $('.character-image').attr('src', '../Assets/img/bg/lancelot.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/lancelot.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/lancelot/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/lancelot/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/lancelot/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/lancelot/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/lancelot/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/lancelot/superskyboundart-thumb.jpg');
    });

    $('#char3').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Kriemhild');
        $('p').text('A female knight of the tribe known for fighting demons. \
        The most skillful knights of this tribe are Kriemhild and Siegfried. \
        To save Kriemhild from the curse, her lover, Siegfried, \
        uses a forbidden tribal spell to undertake Kriemhild\'s curse for himself. \
        When Kriemhild awakens and learns what happened, she is overwhelmed with grief and is unable to leave her lover\'s side.');

        $('.character-image').css('left', '55%');
        $('.character-image').attr('src', '../Assets/img/bg/charlotta.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/charlotta.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/charlotta/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/charlotta/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/charlotta/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/charlotta/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/charlotta/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/charlotta/superskyboundart-thumb.jpg');
    });

    $('#char4').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Wilhelm');
        $('p').text('A skilled hunter who makes a living hunting small animals. \
        Although he is a great marksman, he is a meek and mild guy who tries to avoid conflicts. \
        Wilhelm\'s battalion was wiped out by the Dark Knight Vane, \
        and even Wilhelm fainted and lost to Vane. After he woke up he \
        could not see anything but darkness. He had lost his sight to the \
        sword of Vane.');

        $('.character-image').css('left', '65%');
        $('.character-image').attr('src', '../Assets/img/bg/lowain.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/lowain.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/lowain/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/lowain/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/lowain/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/lowain/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/lowain/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/lowain/superskyboundart-thumb.jpg');
    });

    $('#char5').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Lionel');
        $('p').text('An aristocrat boy who ran away from his home. \
        He is traveling around dressed in black armor and using fake names. \
        He lives a hard life working as a mercenary, utilizing his good \
        swordsmanship and intelligence whenever he runs out of money.\
        From his journey, Lionel finds out about his family\'s sins \
        and hears the criticism from around the world. He keeps traveling \
        to gather the scattered remnants of his family\'s power in order \
        to revive them and recover their honor. ');

        $('.character-image').css('left', '60%');
        $('.character-image').attr('src', '../Assets/img/bg/percival.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/percival.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/percival/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/percival/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/percival/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/percival/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/percival/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/percival/superskyboundart-thumb.jpg');
    });

    $('#char6').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Arita');
        $('p').text('Daughter of a Neth Empire high official. \
        She was born with talents but was cursed by a witch and \
        fell into a deep sleep. Arita wakes up from a deep sleep and \
        finds out that her family has collapsed. She decides to trail \
        after the witch and leaves on a long journey. Arita was chosen as \
        the test subject for an experiment conducted years ago in \
        the Neth Empire. Arita\'s parents tried to protect her by \
        making a contract with the witch, and in return Arita was \
        selected as the 2nd Forest Witch. ');

        $('.character-image').css('left', '60%');
        $('.character-image').attr('src', '../Assets/img/bg/ferry.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/ferry.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/ferry/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/ferry/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/ferry/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/ferry/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/ferry/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/ferry/superskyboundart-thumb.jpg');
    });

    $('#char7').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Uzimant');
        $('p').text('Long ago, the Wolf Tribe and the Frost Elves were in \
        constant conflict. In those days, Uzimant was a young warrior of \
        the Wolf Tribe who fell in love with the Frost Elves\' princess.\
        Uzimant became the head of his clan and married the daughter of \
        the King of the Frost Elves. Unaware of the depth of the animosity \
        between the clans, Uzimant found his new bride murdered in their \
        marriage chamber. Driven by rage, Uzimant launched a war against \
        the Elves. ');
        
        $('.character-image').css('left', '55%');
        $('.character-image').attr('src', '../Assets/img/bg/ladiva.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/ladiva.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/ladiva/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/ladiva/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/ladiva/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/ladiva/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/ladiva/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/ladiva/superskyboundart-thumb.jpg');
    });

    $('#char8').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Sigruna');
        $('p').text('Sigruna is a member of the Silver Elf clan. \
        She lives a very tough life because she is from the lowest \
        caste in the elves\' caste-based society. \
        One day, her parents were attacked by monsters. \
        In order to support her family, she tries to climb the social \
        ladder at all costs. There is only one way to do this: \
        join the King\'s Elite Guard. To make it, Sigruna trains whenever possible. \
        Sigruna\'s efforts finally pay off. With her excellent archery \
        skills, she joins the Elite Guard and is now an expert archer. ');

        $('.character-image').css('left', '58%');
        $('.character-image').attr('src', '../Assets/img/bg/metera.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/metera.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/metera/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/metera/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/metera/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/metera/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/metera/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/metera/superskyboundart-thumb.jpg');
    });

    $('#char9').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Vane');
        $('p').text('A dark being from another world. Where he comes from, \
        power is everything so he is frustrated that in this world, \
        warriors masquerade as strongmen. Vane cannot stand it anymore and \
        decides to destroy all those masquerading as strongmen. \
        As a result, all the criminals are injured and hospitalized \
        leaving the city streets a safer place. ');

        $('.character-image').css('left', '60%');
        $('.character-image').attr('src', '../Assets/img/bg/vaseraga.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/vaseraga.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/vaseraga/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/vaseraga/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/vaseraga/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/vaseraga/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/vaseraga/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/vaseraga/superskyboundart-thumb.jpg');
    });

    $('#char10').click(function (e) {
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Shasha');
        $('p').text('One of the earliest Demons of Hasla, Shasha is a master of fire, one of the four\
        elements of magic. When human prehudice of demons magnifier to the point of violent\
        persecution, Shasha asks wolfram to decline against waging wr. The furious Shasha\
        strorms off into self-exile. Shasha begins to ponder over the human race. She finally\
        decides to set out into the world and go see for herself the true spirit \
        of humans, unclouded by her long hatred.');

        $('.character-image').css('left', '58%');
        $('.character-image').attr('src', '../Assets/img/bg/zeta.png');
        $('body, html').css('background-image', 'url("../Assets/img/bg/zeta.jpg")');

        $('#skill1').attr('src', '../Assets/img/skills/zeta/skill1-thumb.jpg');
        $('#skill2').attr('src', '../Assets/img/skills/zeta/skill2-thumb.jpg');
        $('#skill3').attr('src', '../Assets/img/skills/zeta/skill3-thumb.jpg');
        $('#skillUnique').attr('src', '../Assets/img/skills/zeta/uniqueaction-thumb.jpg');
        $('#skillSb').attr('src', '../Assets/img/skills/zeta/skyboundart-thumb.jpg');
        $('#skillSuperSb').attr('src', '../Assets/img/skills/zeta/superskyboundart-thumb.jpg');
    });
});