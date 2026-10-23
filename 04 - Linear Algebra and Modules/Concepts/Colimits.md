---
title: Colimits
aliases:
  - Colimit
  - Categorical Colimits
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - category-theory
  - colimit
created: 2026-10-16
source: "Vakil, The Rising Sea, 2024-09-08 draft, §§1.2.8, 1.3.1, 1.3.5, 1.3.7-1.3.8 and Exercise 1.3.H, printed/PDF pp. 41, 44, 46-48; Lang, Algebra, rev. 3rd ed., Ch. III, §10, Theorem 10.1, printed pp. 159-161, PDF pp. 174-176"
source_status: verified
status: not-started
---

# Colimits

## Definition

Let $J$ be a **small category**, meaning that its objects and arrows form sets, and let $\mathcal C$ be a locally small category. A diagram $D:J\to\mathcal C$ assigns objects and arrows compatibly with identities and composition.

A **cocone** from $D$ to an object $L$ consists of maps $\iota_j:D(j)\to L$ such that, for every arrow $\alpha:i\to j$ in $J$,

$$
\iota_j\circ D(\alpha)=\iota_i.
$$

> [!definition] Colimit
> A **colimit** of $D$ is a cocone $(L,(\iota_j))$ with the following universal property: for every object $N$ and every compatible family $u_j:D(j)\to N$, there is a unique map $u:L\to N$ satisfying
>
> $$
> u\circ\iota_j=u_j\qquad\text{for every }j.
> $$
>
> We write $L=\operatorname{colim}_{j\in J}D(j)$. Equivalently, this is an initial object in the category of cocones on $D$.

This is the arrow-reversed version of the definition of a limit. The diagram need not be a sequence or a system indexed by a directed partially ordered set. Smallness alone does **not** guarantee existence in an arbitrary category.

The general diagram language is checked in [S13, §1.3.1, printed/PDF p. 44]; the colimit definition and uniqueness statement are in [S13, §1.3.5, printed/PDF p. 46].

## Intuition and Uniqueness

A colimit assembles the diagram's objects while imposing exactly the identifications required by its arrows. To define a map **out of** this assembly is to give maps out of all the pieces that respect those arrows. A limit instead describes compatible maps **into** the pieces.

> [!proposition] Unique up to unique compatible isomorphism
> If $(L,\iota_j)$ and $(L',\iota_j')$ are colimits of the same diagram, there is a unique isomorphism $v:L\to L'$ satisfying $v\iota_j=\iota_j'$ for every $j$.

**Independent proof.** Universality supplies maps $v:L\to L'$ and $w:L'\to L$ preserving all cocone maps. Both $wv$ and $\operatorname{id}_L$ induce the family $(\iota_j)$, so uniqueness gives $wv=\operatorname{id}_L$. Similarly $vw=\operatorname{id}_{L'}$. Uniqueness of $v$ is part of the same universal property.

The word "compatible" matters: the underlying object can have other automorphisms that do not preserve the specified cocone.

## Diagram Shapes

In the module examples, $R$ is an associative ring with identity and all modules are unital left $R$-modules; $R$ need not be commutative.

| Indexing diagram | Colimit name | In $R$-modules |
|---|---|---|
| Empty diagram | Initial object | The zero module |
| Discrete set of objects, with only identity arrows | Coproduct | $\bigoplus_jM_j$ |
| Parallel arrows $f,g:A\rightrightarrows B$ | Coequalizer | $B/\operatorname{im}(f-g)$ |
| Span $B\xleftarrow{f}A\xrightarrow{g}C$ | Pushout, or fibered coproduct | $(B\oplus C)/\operatorname{im}(a\mapsto(f(a),-g(a)))$ |
| Nonempty directed partially ordered set | Directed colimit, or direct limit | $\varinjlim_jM_j$ |

The first row says that an initial object has exactly one map to every object; in sets it is the empty set. For the discrete row, no cross-object relations are imposed, giving the coproduct universal property. Vakil explicitly identifies coproducts with discrete-diagram colimits in [S13, §1.3.7, printed/PDF p. 46].

**Independent verification of the quotient examples.** A map $h:B\to N$ coequalizes $f,g$ exactly when it kills $\operatorname{im}(f-g)$, so it factors uniquely through the displayed coequalizer. A map from $B\oplus C$ is a pair $u:B\to N$, $v:C\to N$. It kills all $(f(a),-g(a))$ exactly when $uf=vg$, which is the pushout compatibility condition. The empty and directed rows follow directly from the corresponding universal properties.

> [!warning] The ambient category matters
> In abelian groups, coproducts and pushouts use the module formulas with $R=\mathbb Z$. In arbitrary groups, the coproduct is the free product and a pushout is the corresponding amalgamated free product. The direct-sum quotient formula is not a construction for nonabelian groups. The existing group exercise proofs give these constructions; the assertion is not imported from the module calculation.

## Construction for Any Small Diagram of Modules

Let $D:J\to R\text{-}\mathbf{Mod}$ be any small diagram. Form the modules

$$
E_0=\bigoplus_{j\in\operatorname{Ob}J}D(j),
\qquad
E_1=\bigoplus_{(\alpha:i\to j)\in\operatorname{Mor}J}D(i).
$$

Write $e_j:D(j)\to E_0$ for an object-summand inclusion and $e_\alpha:D(i)\to E_1$ for an arrow-summand inclusion. Define the $R$-linear map $\delta:E_1\to E_0$ by

$$
\delta(e_\alpha(m))=e_i(m)-e_j(D(\alpha)(m)).
$$

Then a colimit is

$$
L=\operatorname{coker}\delta
=E_0/\operatorname{im}\delta,
\qquad
\iota_j=q\circ e_j,
$$

where $q:E_0\to L$ is the quotient map. The two terms of each relation lie in their specified summands, even when the modules happen to be equal as sets. Identity arrows contribute zero relations.

This construction is posed for arbitrary small diagrams in [S13, Exercise 1.3.H, printed/PDF p. 48]. Its verification is an exercise, so the proof below is an independent derivation, not a source-supplied proof.

> [!success]- Independent proof of the universal property
> The relation $q\delta(e_\alpha(m))=0$ says precisely that $\iota_jD(\alpha)=\iota_i$, so the displayed maps form a cocone.
>
> Given a cocone $u_j:D(j)\to N$, the direct-sum universal property gives a unique $R$-linear map $h:E_0\to N$ with $he_j=u_j$. Compatibility gives
>
> $$
> h\delta(e_\alpha(m))=u_i(m)-u_j(D(\alpha)(m))=0.
> $$
>
> Thus $h$ kills $\operatorname{im}\delta$ and descends uniquely to $u:L\to N$. This map satisfies $u\iota_j=u_j$. Conversely any such map must compose with $q$ to give $h$, so it is unique because $q$ is surjective. This also covers the empty diagram: both sums are zero.

Consequently **every small diagram of $R$-modules has a colimit**. This is an existence theorem in this category, not an extra clause of the general definition.

## Finite Diagrams and Finite Presentation

> [!proposition] Finite colimits of finitely presented modules
> If $J$ has finitely many objects and finitely many arrows, and every $D(j)$ is finitely presented, then $\operatorname{colim}_JD$ is finitely presented. No Noetherian hypothesis on $R$ is needed.

**Independent proof.** First, if $u:A\to B$ has $A$ finitely generated and $B$ finitely presented, choose a presentation $B=R^n/K$ with $K$ finitely generated. Choose finitely many generators of $A$ and lift their images under $u$ to $R^n$. Adding these finitely many lifts to generators of $K$ presents $\operatorname{coker}u$ with finitely many relations.

For the diagram construction, $E_0$ is a finite direct sum of finitely presented modules, hence finitely presented; $E_1$ is a finite direct sum of finitely generated modules, hence finitely generated. Apply the preceding argument to $\delta:E_1\to E_0$.

In particular, a finite diagram of finite free modules has a finite free presentation $E_1\to E_0\to L\to0$. This is the finiteness input behind the existing Lazard-theorem exercise. Here "finite diagram" requires finitely many arrows, not just finitely many objects.

## Directed and General Colimits

A nonempty directed partially ordered set is a small category with one arrow $i\to j$ when $i\le j$. In this case the construction specializes to the direct limit in [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]. Lang treats this case in [S2, Ch. III, §10, printed pp. 159-161, PDF pp. 174-176]; Theorem 10.1 gives the direct-sum quotient construction, leaving the universal-property verification to the reader.

For a directed system, finitely many stages have a common later stage. Every element therefore has a single-stage representative, and the existing direct-limit exercise proof shows

$$
\iota_i(m)=0
\quad\Longleftrightarrow\quad
f_{ik}(m)=0\text{ for some }k\ge i.
$$

The transition maps need not be injective. More generally, a **filtered category** is nonempty, any two objects map to a common object, and any parallel arrows $a,b:i\to j$ become equal after composition with some arrow $c:j\to k$. Directed partially ordered sets are a special case. Vakil discusses this extension in [S13, §1.3.8 and Exercises 1.3.E-F, printed/PDF pp. 47-48]; this note uses the stage criteria only in the directed setting proved in the existing exercises.

> [!warning] Arbitrary colimits are not directed limits
> For a general module diagram, elements of the colimit are finite sums of images from diagram objects, not necessarily images from a single object. For a discrete two-object diagram with both modules $\mathbb Z$, the element $(1,1)\in\mathbb Z\oplus\mathbb Z$ lies in neither individual summand image.
>
> Even zero detection can fail without directedness: take the parallel-arrow diagram $\mathbb Z\rightrightarrows\mathbb Z$ with arrows $\operatorname{id}$ and $0$. Its colimit is zero. The target-stage element $1$ vanishes in the colimit, but that target has no outgoing arrow other than its identity, so no later-stage map kills $1$.

## Exactness Boundary

For any small $J$, module colimits are **right exact**: an objectwise exact sequence of diagrams $A\to B\to C\to0$ induces an exact sequence

$$
\operatorname{colim}_JA\longrightarrow\operatorname{colim}_JB
\longrightarrow\operatorname{colim}_JC\longrightarrow0.
$$

> [!success]- Independent proof of right exactness
> Let $Q=\operatorname{coker}(\operatorname{colim}_JA\to\operatorname{colim}_JB)$. Each composite $B(j)\to\operatorname{colim}_JB\to Q$ kills the image of $A(j)$, and hence descends to a map $C(j)\to Q$. These maps are compatible because the maps $B(j)\to C(j)$ are surjective and the original $B$-maps are compatible.
>
> A compatible family $C(j)\to N$ gives a compatible family $B(j)\to N$ killing each $A(j)$. Universality produces a unique map $\operatorname{colim}_JB\to N$ killing $\operatorname{colim}_JA$, hence a unique map $Q\to N$. Thus $Q$ has the universal property of $\operatorname{colim}_JC$, proving the assertion.

Directed colimits additionally preserve short exact sequences; the full independent proof is in the existing exactness exercise linked through the exercise query below. This stronger exactness statement must not be extended to arbitrary colimits.

**Independent counterexample.** Use the index category with two parallel arrows from object $0$ to object $1$. There is a map of diagrams

$$
D'=(0\rightrightarrows\mathbb Z)
\longrightarrow
D=(\mathbb Z\rightrightarrows\mathbb Z),
$$

where both arrows of $D'$ are zero and the arrows of $D$ are multiplication by $2$ and the zero map. The objectwise maps are $0\to\mathbb Z$ and $\operatorname{id}_{\mathbb Z}$. Both are injective, and both arrow squares commute. But the induced map of colimits is

$$
\mathbb Z\longrightarrow\mathbb Z/2\mathbb Z,
$$

which is not injective. Thus the colimit operation for this diagram shape does not preserve monomorphisms and is not exact.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated and Finitely Presented Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- **Verified primary sources:** S13 is Vakil, *The Rising Sea: Foundations of Algebraic Geometry*, draft of September 8, 2024. The cited printed and physical PDF pages coincide. The general diagram and colimit definitions, coproduct and fibered-coproduct terminology, filtered-category definition, and module-construction exercise were checked on the original PDF page images, including §1.2.8, printed/PDF p. 41. S2 is Lang, *Algebra*, revised third edition; its physical PDF pages here are 15 greater than its printed pages.
- **Comparison of scope:** Vakil allows arbitrary small indexing categories for colimits and separately identifies the filtered case. Lang III §10 supplies the directed-poset module case, not the entire general definition or every diagram shape in this note. Neither cited module construction includes a complete source-written verification of its universal property.
- **Independent derivations:** The uniqueness proof, module universal-property proof, quotient-example verifications, finite-presentation argument, and failure-of-exactness examples are supplied here. The group constructions and directed exactness/vanishing proofs are supplied in the existing linked exercise notes, not claimed as proved on the cited source pages.
- **Archival scope:** This concept is housed with modules because direct sums, quotient modules, and finite presentations do the computational work in its active exercises. No general existence claim for other categories, unrestricted exactness claim, or additional category-theory prerequisite note is assumed.
