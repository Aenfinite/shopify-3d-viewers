"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shirt } from "lucide-react"

interface FabricType {
  id: string
  name: string
  price: number
  image: string
  description: string
  weight: string
  season: string
  availableColors: string[]
}

interface FabricTypeSelectorProps {
  selectedFabricType: string
  onFabricSelect: (fabricId: string, price: number) => void
  fabrics: FabricType[]
}

export function FabricTypeSelector({ 
  selectedFabricType, 
  onFabricSelect, 
  fabrics 
}: FabricTypeSelectorProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            Choose Your Fabric
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-gray-600">
          Select the perfect fabric for your garment style and season
        </p>
      </div>

      {/* Fabric List - Optimized for Sidebar */}
      <div className="space-y-3">
        {fabrics.map((fabric) => (
          <div
            key={fabric.id}
            onClick={() => onFabricSelect(fabric.id, fabric.price)}
            className={`
              p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md
              ${selectedFabricType === fabric.id
                ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
                : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            <div className="flex items-start gap-3">
              {/* Fabric Preview */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <Shirt className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto" />
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{fabric.name}</p>
                  </div>
                </div>
              </div>

              {/* Fabric Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm sm:text-base text-gray-900 truncate">
                    {fabric.name}
                  </h4>
                  <div className="flex items-center gap-2 ml-2">
                    {fabric.price > 0 ? (
                      <Badge variant="outline" className="text-xs text-green-600 whitespace-nowrap">
                        +${fabric.price}
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs whitespace-nowrap">
                        Included
                      </Badge>
                    )}
                    {selectedFabricType === fabric.id && (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                  {fabric.description}
                </p>

                {/* Fabric Details - Compact Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weight:</span>
                    <span className="font-medium">{fabric.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Season:</span>
                    <span className="font-medium">{fabric.season}</span>
                  </div>
                  <div className="flex justify-between col-span-2">
                    <span className="text-gray-500">Available colors:</span>
                    <span className="font-medium">{fabric.availableColors.length} options</span>
                  </div>
                </div>

                {/* Color Preview */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {fabric.availableColors.slice(0, 4).map((colorId, index) => {
                      const colorMap: Record<string, string> = {
                        'charcoal': '#36454F',
                        'navy': '#000080',
                        'black': '#000000',
                        'brown': '#8B4513',
                        'gray': '#808080',
                        'light-gray': '#D3D3D3',
                        'green': '#228B22',
                        'beige': '#F5F5DC',
                        'camel': '#C19A6B',
                        'light-blue': '#ADD8E6',
                        'white': '#FFFFFF'
                      }
                      return (
                        <div
                          key={index}
                          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: colorMap[colorId] || '#ccc' }}
                        />
                      )
                    })}
                    {fabric.availableColors.length > 4 && (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-600">+</span>
                      </div>
                    )}
                  </div>
                  
                  {selectedFabricType === fabric.id && (
                    <div className="text-xs text-blue-700 font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Selected
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fabric Guide - Collapsed for Sidebar */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
        <h4 className="font-medium text-amber-900 mb-2 text-sm">Quick Guide</h4>
        <div className="space-y-2 text-xs sm:text-sm text-amber-800">
          <div className="flex justify-between">
            <span className="font-medium">Business:</span>
            <span>Premium Wool, Wool Blend</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Luxury:</span>
            <span>Cashmere Blend</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Summer:</span>
            <span>Summer Wool, Linen</span>
          </div>
        </div>
      </div>
    </div>
  )
}
