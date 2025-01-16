import React, {useCallback, useState} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {Book} from "../../core/entities/Book";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faBook,
    faCalendar,
    faChevronDown,
    faChevronUp,
    faClock,
    faHashtag,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {BookDetailStyles, statusColors} from "./BookDetailStyles.ts";
import ModalList from "../ModalList";
import {BookStatus, getStatusOptions, statusLabels} from "../../core/entities/BookStatus/BookStatus.ts";
import {useTranslation} from "react-i18next";
import RenderHTML from 'react-native-render-html';


const BookDetail = ({book, isVisible, onClose, onUpdate, onDelete}: {
    book: Book;
    isVisible: boolean;
    onClose: () => void;
    onDelete: () => void;
    onUpdate: (status: BookStatus) => void
}) => {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [status, setStatus] = useState(book.status);
    const [modalVisible, setModalVisible] = useState(false);
    const {currentTheme} = useTheme();
    const bookDetailStyles = BookDetailStyles(currentTheme);
    const {t} = useTranslation();
    const {width} = Dimensions.get('window');

    const handleSelectStatus = useCallback((status: BookStatus) => {
        setStatus(status);
    }, [])
    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose} accessible={false}>
                <KeyboardAvoidingView
                    style={{flex: 1}}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <View style={bookDetailStyles.centeredView}>
                        <TouchableWithoutFeedback>
                            <View style={bookDetailStyles.modalView} onStartShouldSetResponder={() => true}>
                                <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                                    <View style={bookDetailStyles.header}>
                                        <View style={bookDetailStyles.titleContainer}>
                                            <Text style={bookDetailStyles.modalTitle}>{book.title}</Text>
                                            {(book.subTitle &&
                                                <Text style={bookDetailStyles.modalAuthor}>{book.subTitle}</Text>)}
                                            <Text style={bookDetailStyles.modalAuthor}>{book.author}</Text>
                                        </View>
                                        <Image
                                            source={{uri: book.coverImage || 'https://via.placeholder.com/150x225'}}
                                            style={bookDetailStyles.coverImage}
                                        />
                                    </View>

                                    <View style={bookDetailStyles.infoContainer}>
                                        <View style={bookDetailStyles.statusContainer}>
                                            <Button
                                                title={status ? statusLabels[status] : t('noStatus', {ns: 'bookDetail'})}
                                                onPress={() => setModalVisible(true)}
                                                buttonStyle={[bookDetailStyles.statusBadge, {backgroundColor: statusColors[status] || statusColors.NoStatus}]}
                                                textStyle={bookDetailStyles.statusText}
                                            />
                                            <ModalList options={getStatusOptions()} isVisible={modalVisible}
                                                       onClose={() => setModalVisible(false)}
                                                       itemSelected={handleSelectStatus}/>
                                        </View>
                                        <View style={bookDetailStyles.ratingContainer}>
                                            <FontAwesomeIcon icon={faStar} color={'#FFD700'}/>
                                            <Text
                                                style={bookDetailStyles.ratingText}>{book.averageRating ?? t('noRating', {ns: 'bookDetail'})}</Text>
                                        </View>
                                        <View style={bookDetailStyles.infoRow}>
                                            <FontAwesomeIcon icon={faBook} color={currentTheme.textColor}/>
                                            <Text style={bookDetailStyles.infoTextGenre}
                                                  numberOfLines={0}
                                            >{book.genre} </Text>
                                        </View>
                                        <View style={bookDetailStyles.infoRow}>
                                            <FontAwesomeIcon icon={faHashtag} color={currentTheme.textColor}/>
                                            <Text
                                                style={bookDetailStyles.infoText}>{book.pages} {t('pages', {ns: 'bookDetail'})}</Text>
                                        </View>
                                    </View>
                                    <Button
                                        title={t('description', {ns: 'bookDetail'})}
                                        onPress={toggleDescription}
                                        buttonStyle={bookDetailStyles.descriptionHeader}
                                        icon={isDescriptionExpanded ? faChevronUp : faChevronDown}
                                        textStyle={bookDetailStyles.sectionTitle}
                                    />
                                    <View style={{flex: 1}} onStartShouldSetResponder={() => true}>
                                        <ScrollView
                                            keyboardShouldPersistTaps="handled"
                                            style={[bookDetailStyles.descriptionScroll, {maxHeight: isDescriptionExpanded ? 5000 : 80}]}
                                            showsVerticalScrollIndicator={false}
                                        >
                                            <RenderHTML
                                                tagsStyles={{
                                                    body: {
                                                        color: currentTheme.textColor,
                                                        fontSize: 14,
                                                    },
                                                }}
                                                contentWidth={width}
                                                source={{html: book.description}}
                                            />
                                        </ScrollView>
                                    </View>
                                    <View style={bookDetailStyles.metadataContainer}>
                                        <Text
                                            style={bookDetailStyles.metadataTitle}>{t('publication', {ns: 'bookDetail'})}</Text>
                                        <View style={bookDetailStyles.metadataColumn}>
                                            <View style={bookDetailStyles.infoRow}>
                                                <FontAwesomeIcon icon={faCalendar} color={currentTheme.textColor}/>
                                                <Text style={bookDetailStyles.infoText}>
                                                    {new Date(book.publishedDate).toLocaleDateString('es-ES', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric'
                                                    })}
                                                </Text>
                                            </View>
                                            <Text style={bookDetailStyles.infoText}>ISBN-10: {book.isbn10}</Text>
                                            <Text style={bookDetailStyles.infoText}>ISBN-13: {book.isbn13}</Text>
                                        </View>
                                        {book.createdAt && book.updatedAt && (
                                            <View>
                                                <Text
                                                    style={bookDetailStyles.metadataTitle}>{t('tracking', {ns: 'bookDetail'})}</Text>
                                                <View style={bookDetailStyles.metadataColumn}>
                                                    <View style={bookDetailStyles.infoRow}>
                                                        <FontAwesomeIcon icon={faClock} color={currentTheme.textColor}/>
                                                        <Text style={bookDetailStyles.infoText}>
                                                            {t('added', {ns: 'bookDetail'})}: {new Date(book.createdAt).toLocaleDateString('es-ES', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric'
                                                        })}
                                                        </Text>
                                                    </View>
                                                    <View style={bookDetailStyles.infoRow}>
                                                        <FontAwesomeIcon icon={faClock} color={currentTheme.textColor}/>
                                                        <Text style={bookDetailStyles.infoText}>
                                                            {t('updated', {ns: 'bookDetail'})}: {new Date(book.updatedAt).toLocaleDateString('es-ES', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric'
                                                        })}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                                    </View>
                                </ScrollView>

                                <View style={bookDetailStyles.footer}>
                                    <Button
                                        title={`${t('addTo', {ns: 'bookDetail'})} ${!status ? statusLabels[BookStatus.Wishlist] : statusLabels[status]}`}
                                        onPress={() => onUpdate(status)}
                                        disabled={status === book.status}
                                        buttonStyle={[bookDetailStyles.wishlistButton, status === book.status && bookDetailStyles.wishlistButtonDisabled]}
                                        textStyle={bookDetailStyles.wishlistButtonText}
                                    />
                                    <Button
                                        title={t('close', {ns: 'bookDetail'})}
                                        onPress={onClose}
                                        buttonStyle={bookDetailStyles.closeButton}
                                        textStyle={bookDetailStyles.closeButtonText}
                                    />
                                    {book._id && (<Button
                                            title={t('delete', {ns: 'bookDetail'})}
                                            onPress={onDelete}
                                            buttonStyle={bookDetailStyles.deleteButton}
                                            textStyle={bookDetailStyles.deleteButtonText}
                                        />
                                    )}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default BookDetail;
