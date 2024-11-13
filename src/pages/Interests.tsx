"use client"

import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"


function Interests(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }
    return(
        <div style={{width: '100%', height: '100%', padding: 10, background: 'black', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 100, paddingLeft: 20, paddingRight: 20, background: '#FFF5D0', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'
            }}>
                <div style={{ width: 78, height: 61, position: 'relative' }}>
                    <img src='/logo.svg' />
                </div>
            </div>
            <div style={{width: 335, height: 540, padding: 10, borderRadius: 1, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10,display: 'flex'}}>
                <div style={{width: 281, height: 40, color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'}}>
                    INTERESTS
                </div>
                <div style={{width: 306, height: 46, color: '#B2B2B2', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
                    Help us get to know you! <br />Pick 3-5 of your personal interests.
                </div>
                <ScrollArea className="h-72 w-80 rounded-md border" style={{ borderColor: '#D1D1D1', scrollbarWidth: 'thin' }}>
                    <div className="p-3">
                        <h4 className="mb-4 text-2xl font-bold leading-none" style={{ fontFamily: 'Inter' }}>Outdoors</h4>
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms1" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Hiking
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms2" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Climbing
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms3" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Soccer
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms4" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Football
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms5" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms5" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Golf
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms6" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms6" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Tennis
                                </label>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
                <ScrollArea className="h-72 w-80 rounded-md border" style={{ borderColor: '#D1D1D1', scrollbarWidth: 'thin' }}>
                    <div className="p-3">
                        <h4 className="mb-4 text-2xl font-bold leading-none" style={{ fontFamily: 'Inter' }}>Arts</h4>
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms7" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms7" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Acrylic Painting
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms8" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms8" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Oil Painting
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms9" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms9" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Pottery
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms10" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms10" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Drawing
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms11" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms11" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Watercolor
                                </label>
                            </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms12" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms12" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Scrapbooking
                                </label>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
            <div style={{width: '100%', height: 100, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, background: '#FFFAEA', borderRadius: 20, overflow: 'hidden', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{ width: 144, height: '50%', position: 'relative' }}>
                    <Button style={{backgroundColor: '#EFCA47', borderRadius: '30px',
                        boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)'
                    }} onClick={handleClick}>
                        continue →
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Interests
