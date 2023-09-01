/* eslint-disable @typescript-eslint/no-var-requires */
import { useUserStore } from "@infrastructure/zustand-store-adapter/user.store";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Appbar, Divider, Searchbar } from "react-native-paper";
import { Audio } from "expo-av";
import { SoundObject } from "expo-av/build/Audio";
import LogoSmall from "@infrastructure/react-native-adapter/components/LogoSmall";
import MusicListItem from "@infrastructure/react-native-adapter/components/Music/MusicListItem";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";

export default function HomeScreen() {
  // const navigation = useNavigation();
  const userStore = useUserStore();
  const [soundPlayer, setSoundPlayer] = useState<SoundObject>();
  const [soundPlayer2, setSoundPlayer2] = useState<SoundObject>();

  useEffect(() => {
    // loadSounds();
  }, []);
  async function loadSounds() {
    console.log("Loading sound");
    const sound = await Audio.Sound.createAsync(
      require("../../../../../assets/music/music-1.mp3")
    );

    const sound2 = await Audio.Sound.createAsync(
      require("../../../../../assets/music/music-2.wav")
    );
    setSoundPlayer(sound);
    setSoundPlayer2(sound2);
  }

  const musicPaths = [
    "../../../../../assets/music/music-1.mp3",
    "../../../../../assets/music/music-2.wav",
  ];

  const [musics, setMusics] = useState([
    ...Array.from(
      {
        length: 10,
      },
      () => ({
        title: "Koffi I...",
        path: musicPaths[0],
        duration: `10:30`,
      })
    ),
  ]);

  async function stopSounds() {
    console.log("stop all sounds");
    await soundPlayer?.sound.stopAsync();
    await soundPlayer2?.sound.stopAsync();
  }

  async function playSound() {
    console.log("playing sound 1");
    await soundPlayer?.sound.playAsync();
  }

  async function playSound2() {
    console.log("playing sound 2");
    await soundPlayer2?.sound.playAsync();
  }

  const [searching, setSearchStatus] = useState(false);
  return (
    <FlatList
      ListHeaderComponent={() => (
        <Appbar.Header>
          {searching ? (
            <>
              <Searchbar  placeholder="Search" value={""} />
            </>
          ) : (
            <>
              <LogoSmall />
              <Appbar.Content title="Zupsic" />
              <Appbar.Action
                icon="magnify"
                onPress={() => console.log("clicked")}
              />
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => console.log("clicked")}
              />
            </>
          )}
        </Appbar.Header>
      )}
      data={musics}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({ item }) => (
        <MusicListItem
          title={item.title}
          path={item.path}
          duration={item.duration}
        />
      )}
    />
  );
}
