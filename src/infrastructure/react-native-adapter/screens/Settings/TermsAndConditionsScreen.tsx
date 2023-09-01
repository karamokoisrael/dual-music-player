import theme from "@infrastructure/configurations/constants/theme";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import { useNavigation } from "@react-navigation/native";
import { useLayoutStore } from "@infrastructure/zustand-store-adapter/layout.store";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, List, Paragraph, Text } from "react-native-paper";

export default function TermsAndConditionsScreen() {
  const layoutStore = useLayoutStore();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>
          {i18n.t("privacy_policy")} / {i18n.t("terms_and_conditions")}
        </Text>
      </View>
      <View style={tw`mt-10`}>
        <List.AccordionGroup>
          <List.Accordion
            description="Les détails complets sur chaque type de Données personnelles collectées sont fournis dans les parties dédiées de la présente politique de confidentialité ou par des textes d’explication spécifiques publiés avant la collecte des Données."
            title={i18n.t("privacy_policy")}
            id="1"
          >
            <Paragraph>
              {`
                Responsable des données et Propriétaire

                CRYPTO MARKET CI
                Le Marché Officiel de la Monnaie électronique en Côte d’Ivoire
                ADRESSE
                Treichville Zone 3, Rue de la Glacière,
                Immeuble SICOGERE, Rez-de-Chaussée
                Abidjan, Lagunes 99326
                CI
                CONTACT
                +225 27 21 59 64 08 
                contact@cryptomarket-ci.com
                Adresse e-mail de contact du Propriétaire : contact@cryptomarket-ci.com
                Types de Données collectées
                
                Le propriétaire ne fournit pas de liste des types de Données personnelles collectées.
                
                Les détails complets sur chaque type de Données personnelles collectées sont fournis dans les parties dédiées de la présente politique de confidentialité ou par des textes d’explication spécifiques publiés avant la collecte des Données.
                Les Données personnelles peuvent être librement fournies par l’Utilisateur, ou, en cas de Données d’utilisation, collectées automatiquement lorsque vous utilisez cette Application.
                Toutes les Données demandées par cette Application sont obligatoires et leur absence peut rendre impossible la fourniture des services par cette Application.
                Dans le cas où cette Application précise que certaines Données ne sont pas obligatoires, les Utilisateurs sont libres de ne pas les communiquer sans entraîner de conséquences sur la disponibilité ou le fonctionnement du service.
                Les Utilisateurs qui ne sont pas sûrs de savoir quelles sont les Données personnelles obligatoires sont invités à contacter le Propriétaire.
                Toute utilisation des Cookies – ou d’autres outils de suivi – par cette Application ou par les propriétaires de services de tiers utilisés par cette Application a pour objectif de fournir le service requis par l’Utilisateur, en plus d’autres finalités décrites dans le présent document et dans la Politique relative aux cookies, si elle est disponible.
                
                Les Utilisateurs sont responsables de toute Donnée personnelle de tiers obtenue, publiée ou communiquée par l’intermédiaire de cette Application et confirment qu’ils obtiennent le consentement du tiers pour fournir les Données au Propriétaire.
                Mode et lieu de traitement des Données
                Méthodes de traitement
                
                CRYPTO MARKET CI traite les Données de l’Utilisateur d’une manière appropriée et prend toutes les mesures de sécurité nécessaires pour empêcher l’accès, la divulgation, la modification ou la destruction non autorisés des Données. Le Traitement des données est effectué à l’aide d’ordinateurs ou d’outils informatiques et en suivant les procédures et les modes organisationnels étroitement liés aux finalités indiquées. L’accès, outre celui réservé au Responsable du traitement des données, peut dans certains cas être accordé à certaines catégories de personnes en charge des opérations du site (administration, ventes, marketing, service juridique, administration du système) ou à des parties externes (telles que les fournisseurs tiers de services techniques, les services de messagerie, les fournisseurs d’hébergement, les entreprises informatiques, les agences de communication) désignées, le cas échéant, comme sous-traitants des Données par le Propriétaire. La liste mise à jour de ces parties peut être demandée à tout moment au Responsable du traitement des données.
                Lieu de traitement
                
                Les Données sont traitées au siège du Responsable des données et en tout autre lieu où les parties responsables du traitement sont situées. Veuillez contacter le Responsable des données pour de plus amples informations.
                Temps de conservation
                
                Les Données seront conservées le temps qu’il sera nécessaire pour fournir le service demandé par l’Utilisateur, ou tel qu’énoncé dans les objectifs décrits dans le présent document. L’Utilisateur peut toujours demander au Responsable des données leur suspension ou leur suppression.
                Informations supplémentaires sur le traitement et la collecte des Données
                Action en justice
                
                Les Données personnelles de l’Utilisateur peuvent être utilisées à des fins juridiques par le Responsable des données devant les tribunaux ou à toute étape pouvant conduire à une action en justice résultant d’une utilisation inappropriée de cette Application ou des services connexes.
                L’Utilisateur est conscient du fait que les autorités publiques peuvent exiger du Responsable des données la divulgation des Données personnelles.
                Informations supplémentaires concernant les Données personnelles de l’Utilisateur
                
                Outre les informations contenues dans la présente politique de confidentialité, cette Application peut fournir à l’Utilisateur des renseignements complémentaires et des informations contextuelles concernant des services particuliers ou la collecte et le traitement des Données personnelles.
                Journaux système et maintenance
                
                À des fins d’exploitation et de maintenance, cette Application et tout autre service tiers peuvent collecter des fichiers qui enregistrent les interactions avec cette Application (Journaux système) ou utiliser à cette fin d’autres Données personnelles, telle que l’adresse IP.
                Informations non incluses dans la présente politique
                
                De plus amples renseignements concernant la collecte ou le traitement des Données personnelles peuvent à tout moment être demandés au Responsable des données. Veuillez consulter les informations de contact au début de ce document.
                Droits de l’Utilisateur
                
                L’Utilisateur a, à tout moment, le droit de savoir si ses Données personnelles ont été stockées et peut consulter le Responsable des données pour connaître leurs contenus et leur origine, vérifier leur exactitude ou demander à ce qu’elles soient complétées, annulées, mises à jour ou rectifiées. Il peut aussi demander à ce qu’elles soient transformées en un format anonyme ou à ce que toute donnée obtenue en violation de la loi soit bloquée, ou s’opposer à leur traitement pour tout motif légitime que ce soit. Les demandes doivent être transmises au Responsable des données à l’adresse indiquée ci-dessus.
                
                cette Application ne prend pas en charge les demandes « Interdire le suivi ».
                Référez-vous à la politique de confidentialité des services tiers pour déterminer s’ils respectent ou non l’option « Interdire le suivi ».
                Modifications de la présente politique de confidentialité
                
                Le Responsable des données se réserve le droit de modifier à tout moment la présente politique de confidentialité en en informant l’Utilisateur sur cette page. Il est recommandé de consulter souvent cette page en se référant à la date de la dernière modification indiquée au bas de cette page. Si un Utilisateur s’oppose à une quelconque modification apportée à cette Politique, il doit cesser d’utiliser cette Application et peut demander au Responsable des données de supprimer ses Données personnelles. Sauf mention contraire, la politique de confidentialité alors en vigueur s’applique à toutes les Données personnelles que le Responsable des données détient au sujet de l’Utilisateur.
                Informations sur la présente politique de confidentialité
                
                Le Responsable des données est responsable de la présente politique de confidentialité, préparée à partir des modules fournis par GODADDY et hébergés sur les serveurs de GODADDY.
                Définitions et références légales
                Données personnelles (ou Données)
                
                Toute information concernant une personne physique ou morale, une institution ou une association qui est, ou peut être identifiée, même indirectement, par référence à une autre information, y compris un numéro d’identification personnelle.
                Données d’utilisation
                
                Les informations collectées automatiquement à partir de cette Application (ou de services tiers employés par cette Application), qui peuvent inclure les adresses IP ou les noms de domaines des ordinateurs utilisés par l’Utilisateur qui utilise cette Application, les adresses URI (Uniform Resource Identifier ou identifiant uniforme de ressource), l’heure de la demande, la méthode utilisée pour soumettre la demande au serveur, la taille du fichier reçu en réponse, le code numérique indiquant le statut de la réponse du serveur (résultat favorable, erreur, etc.), le pays d’origine, les caractéristiques du navigateur et du système d’exploitation utilisés par l’Utilisateur, les différents détails relatifs au temps par visite (p. ex. temps passé sur chaque page dans l’Application) et les détails relatifs au chemin suivi dans l’Application avec une référence spéciale à la séquence des pages visitées, et d’autres paramètres concernant le système d’exploitation ou l’environnement informatique de l’Utilisateur.
                Utilisateur
                
                La personne utilisant cette Application, qui doit correspondre à la Personne concernée ou être autorisée par celle-ci, à laquelle les Données personnelles se réfèrent.
                Personne concernée
                
                La personne physique ou morale à laquelle les Données personnelles se réfèrent.
                Service chargé de la mise en œuvre du traitement des données (ou Responsable du traitement)
                
                Personne physique ou morale, administration publique ou toute autre entité, association ou organisation autorisée par le Responsable des données à traiter les Données personnelles en conformité avec la présente politique de confidentialité.
                Responsable des données (ou Propriétaire)
                
                La personne physique ou morale, l’administration publique ou toute autre entité, association ou organisation étant habilitée, même conjointement avec un autre Responsable des données, à prendre des décisions concernant les objectifs et les méthodes de traitement des Données personnelles et les moyens utilisés, y compris les mesures de sécurité concernant l’exploitation et l’utilisation de cette Application. Sauf mention contraire, le Responsable des données est le Propriétaire de cette Application.
                Cette Application
                
                Le matériel informatique ou outil logiciel avec lequel les Données personnelles de l’Utilisateur sont collectées.
                Informations légales
                
                Avis aux Utilisateurs européens : la présente politique de confidentialité a été préparée en exécution des obligations définies à l’article 10 de de la directive européenne n°95/46/CE et en vertu des dispositions de la directive 2002/58/CE, telle que révisée par la directive 2009/136/CE portant sur les cookies.
                
                Cette politique de confidentialité s’applique exclusivement à cette Application.
                `}
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            description="Les présentes Conditions régissent exclusivement la vente de Produits dans plusieurs catégorie
Entre CRYPTO MARKET CI, SARL pluripersonnelle sis à Treichville Zone 3, Rue de la Glacière, Immeuble SICOGERE, Rez-de-Chaussée, "
            title={i18n.t("terms_and_conditions")}
            id="2"
          >
            <Paragraph>
              {`
                Les présentes Conditions régissent exclusivement la vente de Produits dans plusieurs catégorie
                Entre CRYPTO MARKET CI, SARL pluripersonnelle sis à Treichville Zone 3, Rue de la Glacière, Immeuble SICOGERE, Rez-de-Chaussée, Abidjan, immatriculé au RCCM Nº CI-ABJ-03-2021-B12-03614, représentée par Monsieur ANOH HERMAN NYAMKE, en qualité de gérant, dûment habilité aux fins des présentes. La société peut être jointe par email en cliquant sur le formulaire de contact accessible via la page d’accueil du site.
                Ci-après le « Vendeur » ou la « Société ».
                D’une part, Et la personne physique ou morale procédant à l’achat de produits ou services de la société, Ci-après, « l’Acheteur », ou « le Client » D’autre part,
                Il a été exposé et convenu ce qui suit :
                PRÉAMBULE
                Le contrat est simplement conclu entre le vendeur et l’Internaute.
                Le Vendeur est éditeur de produits et de services  exclusivement à destination de consommateurs, commercialisés par l’intermédiaire de son site Internet (https://cryptomarket-ci.com). La liste et le descriptif des biens et services proposés par la Société peuvent être consultés sur le site susmentionné.
                L’activité de la société est présentée et explicitée de même que la destination des produits.
                Article 1 : Objet Les présentes Conditions Générales de Vente déterminent les droits et obligations des parties dans le cadre de la vente en ligne de Produits proposés par le Vendeur.
                Le contrat définit les obligations des parties (vendeur : livrer le bien, acheteur : payer le prix).
                Article 2 : Dispositions générales Les présentes Conditions Générales de Vente (CGV) s’appliquent à toutes les ventes de Produits, effectuées au travers du site Internet de la Société qui sont partie intégrante du Contrat entre l’Acheteur et le Vendeur. Le Vendeur se réserve la possibilité de modifier les présentes, à tout moment par la publication d’une nouvelle version sur son site Internet. Les CGV applicables alors sont celles étant en vigueur à la date du paiement (ou du premier paiement en cas de paiements multiples) de la commande. Ces CGV sont consultables sur le site Internet de la Société à l’adresse suivante :
                abidjanboutik.com  La Société s’assure également que leur acceptation soit claire et sans réserve en mettant en place une case à cocher et un clic de validation. Le Client déclare avoir pris connaissance de l’ensemble des présentes Conditions Générales de Vente, et le cas échéant des Conditions Particulières de Vente liées à un produit ou à un service, et les accepter sans restriction ni réserve. Le Client reconnaît qu’il a bénéficié des conseils et informations nécessaires afin de s’assurer de l’adéquation de l’offre à ses besoins. Le Client déclare être en mesure de contracter légalement en vertu des lois en vigueur ou valablement représenter la personne physique ou morale pour laquelle il s’engage. Sauf preuve contraire les informations enregistrées par la Société constituent la preuve de l’ensemble des transactions.
                Article 2 : Prix Les prix des produits vendus au travers du site Internet sont indiqués en FRANCS CFA XOF hors taxes et précisément déterminés sur les pages de descriptifs des Produits. Ils sont également indiqués FRANCS CFA XOF toutes taxes comprises (TVA + autres taxes éventuelles) sur la page de commande des produits, et hors frais spécifiques d’expédition. Pour tous les produits expédiés hors Côte d’Ivoire, le prix est calculé hors taxes sur la facture. Des droits de douane ou autres taxes locales ou droits d’importation ou taxes d’état sont susceptibles d’être exigibles dans certains cas. Ces droits et sommes ne relèvent pas du ressort du Vendeur. Ils seront à la charge de l’acheteur et relèvent de sa responsabilité (déclarations, paiement aux autorités compétentes, etc.). Le Vendeur invite à ce titre l’acheteur à se renseigner sur ces aspects auprès des autorités locales correspondantes. La Société se réserve la possibilité de modifier ses prix à tout moment pour l’avenir. Les frais de télécommunication nécessaires à l’accès au site Internet de la Société sont à la charge du Client. Le cas échéant également, les frais de livraison.
                Article 2.1 : Prix – La Société se réserve la possibilité de changer les prix à tout moment des produits achetés sur abonnements par le consommateur.
                Article 3 : Conclusion du contrat en ligne Le Client devra suivre une série d’étapes spécifiques à chaque Produit offert par le Vendeur pour pouvoir réaliser sa commande. Toutefois, les étapes décrites ci-après sont systématiques : ➢ Information sur les caractéristiques essentielles du Produit ; ➢ Choix du Produit, le cas échéant de ses options et indication des données essentielles du Client (identification, adresse, numéro de téléphone, e-mail…) ; ➢ Acceptation des présentes Conditions Générales de Vente. ➢ Vérification des éléments de la commande et, le cas échéant, correction des erreurs. ➢ Suivi des instructions pour le paiement, et paiement des produits. ➢ Livraison des produits. Le Client recevra alors confirmation par courrier électronique du paiement de la commande, ainsi qu’un accusé de réception de la commande la confirmant.
                Pour les produits livrés, cette livraison se fera à l’adresse indiquée par le Client. Aux fins de bonne réalisation de la commande, et le Client s’engage à fournir ses éléments d’identification véridiques. Le Vendeur se réserve la possibilité de refuser la commande, par exemple pour toute demande anormale, réalisée de mauvaise foi ou pour tout motif légitime.
                Article 4 : Produits et services Les caractéristiques essentielles des biens, des services et leurs prix respectifs sont mis à disposition de l’acheteur sur le site Internet de la société. Le client atteste avoir reçu un détail des frais de livraison ainsi que les modalités de paiement, de livraison et d’exécution du contrat. Le Vendeur s’engage à honorer la commande du Client dans la limite des stocks de Produits disponibles uniquement. A défaut, le Vendeur en informe le Client. Ces informations contractuelles sont présentées en détail. Elles font l’objet d’un récapitulatif et d’une confirmation lors de la validation de la commande. Les parties conviennent que les illustrations ou photos des produits offerts à la vente n’ont pas de valeur contractuelle. La durée de validité de l’offre des Produits ainsi que leurs prix sont précisés sur le site Internet de la Société, ainsi que la durée minimale des contrats proposés lorsque ceux-ci portent sur une fourniture continue ou périodique de produits ou services. Sauf conditions particulières, les droits concédés au titre des présentes le sont uniquement à la personne physique signataire de la commande (ou la personne titulaire de l’adresse email communiquée).Conformément aux dispositions légales en matière de conformité et de vices cachés, le Vendeur rembourse ou échange les produits défectueux ou ne correspondant pas à la commande.
                Article 5 : Clause de réserve de propriété Les produits demeurent la propriété de la Société jusqu’au paiement complet du prix.
                La propriété des biens reste au vendeur tant que le client n’a pas payé l’intégralité du prix de vente.
                Article 6 : Modalités de livraison Les produits sont livrés à l’adresse de livraison qui a été indiquée lors de la commande et le délai indiqué. Ce délai ne prend pas en compte le délai de préparation de la commande, lorsque la livraison nécessite une prise de rendez-vous avec le Client, lorsque le Client commande plusieurs produits en même temps ceux-ci peuvent avoir des délais de livraison différents acheminés. En cas de retard d’expédition. En cas de retard de livraison, le Client dispose de la possibilité d’être remboursé. Après accord entre les deux parties, le Vendeur procède alors au remboursement du produit et aux frais « aller ». Le Vendeur met à disposition un point de contact téléphonique indiqué dans l’email de confirmation de commande afin d’assurer le suivi de la commande. Le Vendeur rappelle qu’au moment où le Client pend possession physiquement des produits, les risques de perte ou d’endommagement des produits lui est transféré. Il appartient au Client de notifier au transporteur toute réserves sur le produit livré.
                Description des modalités de livraison
                Article 7 : Disponibilité et présentation Les commandes seront traitées dans la limite de nos stocks disponibles ou sous réserve des stocks disponibles chez nos fournisseurs. En cas d’indisponibilité d’un article pour une période supérieure à 03 jours ouvrables, vous serez immédiatement prévenu des délais prévisibles de livraison et la commande de cet article pourra être annulée sur simple demande. Le Client pourra alors demander un avoir pour le montant de l’article ou son remboursement.
                Gestion de la disponibilité des articles
                Article 8 : Paiement Le paiement est exigible immédiatement à la commande pour les produits dits ‘virtuels’ ou téléchargeables (ex: ceux des catégories ‘Monnaie Electronique et E-Books’) , et pour les autres produits à la livraison. Le Client peut effectuer le règlement par carte ou moyens de paiement comme indiqué à la fin de cet article . Les cartes émises par des banques domiciliées hors de la Côte d’Ivoire doivent obligatoirement être des cartes bancaires internationales (Mastercard ou Visa).Le paiement sécurisé en ligne par carte bancaire est réalisé par notre prestataire de paiement. Les informations transmises sont chiffrées dans les règles de l’art et ne peuvent être lues au cours du transport sur le réseau HTTPS. Une fois le paiement lancé par le Client, la transaction est immédiatement débitée après vérification des informations. L’engagement de payer donné par carte est irrévocable. En communiquant ses informations bancaires lors de la vente, le Client autorise le Vendeur à débiter sa carte du montant relatif au prix indiqué. Le Client confirme qu’il est bien le titulaire légal de la carte à débiter et qu’il est légalement en droit d’en faire usage. En cas d’erreur, ou d’impossibilité de débiter la carte, la Vente est immédiatement résolue de plein droit et la commande annulée.
                Précisions importantes relatives au paiement, le type de cartes acceptées, les autres moyens, etc.
                Article 9 : Délai de rétractation Le consommateur dispose d’un délai de 03 jours francs pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités, à l’exception, le cas échéant, des frais de retour ». « Le délai mentionné à l’alinéa précédent court à compter de la réception pour les biens ou de l’acceptation de l’offre pour les prestations de services ». Le droit de rétractation peut être exercé en contactant la Société par email: contact@cryptomarket-ci.com . Nous informons les Clients que ce droit de rétractation ne peut être exercé pour les produits téléchargeables tels que les e-books, les rechargements de cartes électroniques et les produits de la catégories monnaie électroniques. En cas d’exercice du droit de rétractation dans le délai susmentionné, seul le prix du ou des produits achetés et les frais d’envoi seront remboursés, les frais de retour restent à la charge du Client. Les retours des produits sont à effectuer dans leur état d’origine et complets (emballage, accessoires, notice…) de sorte qu’ils puissent être recommercialisés à l’état neuf ; ils doivent si possible être accompagnés d’une copie du justificatif d’achat.
                Modalités d’exercice des délais de rétractation
                Article 10 : Garanties Conformément à la loi, le Vendeur assume deux garanties : de conformité et relative aux vices cachés des produits. Le Vendeur rembourse l’acheteur ou échange les produits apparemment défectueux ou ne correspondant pas à la commande effectuée.  Le Vendeur rappelle que le consommateur : – dispose d’un délai de 03 jours à compter de la délivrance du bien pour agir auprès du Vendeur
                Article 11 : Réclamations Le cas échéant, l’Acheteur peut présenter toute réclamation en contactant la société au moyen de l’adresse e-mail suivante : contact@cryptomarket-ci.com
                Article 12 : Droits de propriété intellectuelle Les marques, noms de domaines, produits, logiciels, images, vidéos, textes ou plus généralement toute information objet de droits de propriété intellectuelle sont et restent la propriété exclusive du vendeur. Aucune cession de droits de propriété intellectuelle n’est réalisée au travers des présentes CGV. Toute reproduction totale ou partielle, modification ou utilisation de ces biens pour quelque motif que ce soit est strictement interdite.
                Article 13 : Force majeure L’exécution des obligations du vendeur au terme des présentes est suspendue en cas de survenance d’un cas fortuit ou de force majeure qui en empêcherait l’exécution. Le vendeur avisera le client de la survenance d’un tel événement dès que possible.
                Article 14 : nullité et modification du contrat Si l’une des stipulations du présent contrat était annulée, cette nullité n’entraînerait pas la nullité des autres stipulations qui demeureront en vigueur entre les parties. Toute modification contractuelle n’est valable qu’après un accord écrit et signé des parties.
                Article 15 : Protection des données personnelles Conformément à la Loi Informatique et Libertés du 6 janvier 1978, vous disposez des droits d’interrogation, d’accès, de modification, d’opposition et de rectification sur les données personnelles vous concernant. En adhérant à ces conditions générales de vente, vous consentez à ce que nous collections et utilisions ces données pour la réalisation du présent contrat. En saisissant votre adresse email sur l’un des sites de notre réseau, vous recevrez des emails contenant des informations et des offres promotionnelles concernant des produits édités par la Société et de ses partenaires. Vous pouvez vous désinscrire à tout instant. Il vous suffit pour cela de cliquer sur le lien présent à la fin de nos emails ou de contacter le Service Client par e-mail.
                Article 17 : Droit applicable Toutes les clauses figurant dans les présentes conditions générales de vente, ainsi que toutes les opérations d’achat et de vente qui y sont visées, seront soumises au droit ivoirien.
                `}
            </Paragraph>
          </List.Accordion>
        </List.AccordionGroup>
      </View>
      <Button
        style={tw`mt-6 w-[100%] text-center mb-5 self-stretch`}
        mode="contained"
        onPress={() => {
          layoutStore.acceptTermsAndConditions();
          navigation.navigate("SignIn");
        }}
      >
        {i18n.t("accept")}
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#444",
    fontSize: 28,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    width: "100%",
    fontSize: 18,
    color: "#000",
    paddingVertical: 4,
  },
  selectedText: {
    width: "100%",
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.primary,
    paddingVertical: 4,
  },
});
