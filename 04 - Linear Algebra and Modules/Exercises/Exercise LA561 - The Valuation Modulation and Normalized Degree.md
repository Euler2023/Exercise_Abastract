---
title: 'Exercise LA561: The Valuation Modulation and Normalized Degree'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 15, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-15
created: '2026-10-23'
---

# Exercise LA561: The Valuation Modulation and Normalized Degree

## Problem Statement

> [!question] Neukirch IV.6.15
> For the following, let $d:G\to\widehat{\mathbb Z}$ be a fixed surjective homomorphism. Let $f:X\to Y$ be a map of connected finite $G$-sets and $x\in X$, $y=f(x)\in Y$. The inertia degree, resp. the ramification index, of $f$ is defined by
> $$
> f_{X|Y}=(d(G_y):d(G_x)),\qquad e_{X|Y}=(I_y:I_x),
> $$
> where $I_y$, resp. $I_x$, is the kernel of $d:G_y\to\widehat{\mathbb Z}$, resp. $d:G_x\to\widehat{\mathbb Z}$. $f$ is called unramified if $e_{X|Y}=1$.
>
> $d$ defines a $G$-modulation $\boldsymbol{\mathbb Z}$ such that the maps $f^*,f_*$, corresponding to a mapping $f:X\to Y$ of connected $G$-sets, are given by
> $$
> \boldsymbol{\mathbb Z}(Y)=\widehat{\mathbb Z}\ \mathop{\leftrightarrows}^{e_{X|Y}}_{f_{X|Y}}\ \widehat{\mathbb Z}=\boldsymbol{\mathbb Z}(X).
> $$
> In this transcription of the printed arrows, the upper arrow points left and is labelled $e_{X|Y}$; the lower arrow points right and is labelled $f_{X|Y}$. This gives a homomorphism of $G$-modulations $d:\pi_{\rm ab}\to\boldsymbol{\mathbb Z}$.

> [!warning] Source issue
> The directions of the arrows labeled $e$ and $f$ in the source image disagree with normalized degree and transfer. The correct $f^*$ is multiplication by $e$, and $f_*$ is multiplication by $f$. The solution independently checks the directions by computing transfer factor by factor.

## Hints

> [!hint]- Hint 1
> On $H=G_x$, set $m_H=[\widehat{\mathbb Z}:d(H)]$ and normalize the image using $d_H=d/m_H$.

> [!hint]- Hint 2
> Inclusion multiplies normalized degree by $m_H/m_K=f$. Transfer multiplies the original $d$ by $[K:H]=ef$, which becomes multiplication by $e$ after normalization. Use this to check the printed arrows.

## Solution

> [!success]- Independent derivation
> **Checking the arrow directions.** With $Y$ on the left and $X$ on the right, the source diagram labels the rightward arrow $f$ and the leftward arrow $e$. This is incompatible with the subsequent homomorphism $d:\pi_{ab}\to\boldsymbol{\mathbb Z}$. The correct maps are
> $$
> f^*:\boldsymbol{\mathbb Z}(Y)\longrightarrow\boldsymbol{\mathbb Z}(X),\quad z\longmapsto e_{X|Y}z,
> \qquad
> f_*:\boldsymbol{\mathbb Z}(X)\longrightarrow\boldsymbol{\mathbb Z}(Y),\quad z\longmapsto f_{X|Y}z.
> $$
> The following proof establishes the corrected version and also shows why the printed directions cannot hold.
>
> Let $H\subset K$ be the corresponding stabilizers, and put $m_H=[\widehat{\mathbb Z}:d(H)]$ and $m_K=[\widehat{\mathbb Z}:d(K)]$. Both are finite integers and $d(H)=m_H\widehat{\mathbb Z}$. Define a continuous surjection
> $$
> d_H:H^{ab}\longrightarrow\widehat{\mathbb Z},\qquad d_H(h)=d(h)/m_H.
> $$
> Division by $m_H$ is unique in the image. Write $f=m_H/m_K$ and $e=[I_K:I_H]$. The exact sequences of stabilizers give $[K:H]=ef$.
>
> Inclusion $i:H^{ab}\to K^{ab}$ satisfies
> $$
> d_K i(h)=d(h)/m_K=f\,d_H(h).
> $$
> The coset-product formula for transfer gives $d(\operatorname{Ver}_{K/H}k)=[K:H]d(k)$. Write $kr=r'h_r$ and sum over all $r$; the terms $\sum d(r)-\sum d(r')$ cancel because they involve the same coset permutation. Hence
> $$
> d_H\operatorname{Ver}_{K/H}(k)=\frac{ef\,d(k)}{m_H}=e\,d_K(k).
> $$
> Thus $\ker d_H$ is stable under inclusion, transfer, and conjugation, and is a submodulation of $\pi_{ab}$. Taking its pointwise quotient gives a modulation whose values are canonically identified with $\widehat{\mathbb Z}$ via $d_H$. The two induced maps are precisely $f_*,f^*$ above. All Mackey identities are inherited by the quotient, and $d$ is also a homomorphism of modulations.
>
> As a direct check, in an unramified extension $e=1$, so restriction must still send a normalized prime value $1$ to $1$, while the norm multiplies by the residue degree $f$. The reversed labels in the source diagram already contradict this normalization when $f>1$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Quotient Functors]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Inertia and Residue Degree]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 15 and its preceding definitions, printed p. 309, PDF p. 328]. The source diagram was checked at 350 dpi and independently reviewed against the original page. Its directions are transcribed and explicitly corrected here. No screenshot containing only formulas was retained.
- **Notation:** The pointwise value of the book's $\boldsymbol{\mathbb Z}(X)$ is $\widehat{\mathbb Z}$. The later valuation image subgroup is denoted separately by $Z\subset\widehat{\mathbb Z}$.
