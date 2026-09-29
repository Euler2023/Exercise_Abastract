---
title: "Exercise LA462: Seven Pfaffian Identities from Geometric Algebra"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - pfaffian
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 20, printed p. 599, PDF p. 614"
created: 2026-09-29
---

# Exercise LA462: Seven Pfaffian Identities from Geometric Algebra

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 20
> Prove all the properties for the pfaffian stated in Artin's *Geometric Algebra* (Interscience, 1957), p. 142.

> [!info] Verified mathematical restatement of the seven referenced properties
> Let $n=2m$, let $X=(x_{ij})$ be an alternating matrix, and use Emil Artin's Pfaffian $\operatorname{Pf}_A$. Write $C_{rs}$ for the coefficient of $x_{rs}$, $r<s$, and $X^{\widehat r\widehat s}$ for the matrix deleting rows and columns $r,s$ while retaining the order of all other indices.
>
> 1. A simultaneous interchange of two rows and the corresponding columns reverses the Pfaffian's sign.
> 2. Multiplying one row and the corresponding column by $t$ multiplies the Pfaffian by $t$.
> 3. With all other entries fixed, the Pfaffian is linear in the entries incident with any fixed index.
> 4. The coefficients satisfy
>
> $$
> C_{12}=\operatorname{Pf}_A(X^{\widehat1\widehat2}),\qquad
> C_{rs}=(-1)^{r+s-1}\operatorname{Pf}_A(X^{\widehat r\widehat s}).
> $$
>
> 5. Expansion along the first index is
>
> $$
> \operatorname{Pf}_A(X)=\sum_{s=2}^n x_{1s}C_{1s}.
> $$
>
> 6. In sizes $2$ and $4$,
>
> $$
> \operatorname{Pf}_A(X)=x_{12},\qquad
> \operatorname{Pf}_A(X)=x_{12}x_{34}+x_{13}x_{42}+x_{14}x_{23},
> $$
>
> respectively.
>
> 7. For any $n\times n$ matrix $B=(b_{ij})$, define the pairing of columns by
>
> $$
> g_{ij}=\sum_{r=1}^{m}
> \det\begin{pmatrix}b_{2r-1,i}&b_{2r,i}\\b_{2r-1,j}&b_{2r,j}\end{pmatrix}.
> $$
>
> Then $\det B=\operatorname{Pf}_A((g_{ij}))$.
>
> These seven items were checked on [Emil Artin, *Geometric Algebra* (1957), Ch. III, §5, printed p. 142, PDF p. 154](https://archive.org/download/geometricalgebra033556mbp/geometricalgebra033556mbp.pdf#page=154). They are restated mathematically here, with $B$ replacing Artin's matrix letter to avoid a clash of notation.

> [!warning] Source notation conflict: two Pfaffian normalizations
> Artin's formulas use $\operatorname{Pf}_A(J_{\mathrm{int}})=1$ for $J_{\mathrm{int}}=\operatorname{diag}(J_2,\ldots,J_2)$, where $J_2=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Lang instead normalizes the Pfaffian to be $1$ on $J_{\mathrm{grp}}=\begin{pmatrix}0&I_m\\-I_m&0\end{pmatrix}$ [S2, Ch. XV, §9, printed p. 589, PDF p. 604]. The two polynomials are related by
>
> $$
> \operatorname{Pf}_L(X)=\varepsilon_m\operatorname{Pf}_A(X),
> \qquad \varepsilon_m=(-1)^{m(m-1)/2}.
> $$
>
> Thus the seven properties requested from Artin are proved using $\operatorname{Pf}_A$ as explicitly labeled. They must not be combined with Lang's normalization without converting signs.

## Hints

> [!hint]- Hint 1: Pair all indices
> Use the signed perfect-matching definition of $\operatorname{Pf}_A$. Each index occurs in exactly one factor of every term. Isolate the terms containing the pair $\{r,s\}$.

> [!hint]- Hint 2: Use a universal congruence identity
> Prove $\operatorname{Pf}_A(B^{\mathsf T}XB)=\det(B)\operatorname{Pf}_A(X)$ using the top exterior power of an alternating $2$-form over a rational polynomial ring, then specialize the resulting integral polynomial identity. For item 7, use $X=J_{\mathrm{int}}$.

## Solution

> [!success]- Independent proofs of all seven properties
> **A universal definition and change-of-variables identity.** For every perfect matching $\mathcal M$ of $\{1,\ldots,2m\}$, order each pair as $i_r<j_r$ and order the pairs by $i_1<\cdots<i_m$. Let $\epsilon(\mathcal M)$ be the sign of the permutation $(i_1,j_1,\ldots,i_m,j_m)$. Define
>
> $$
> \operatorname{Pf}_A(X)=\sum_{\mathcal M}\epsilon(\mathcal M)
> \prod_{r=1}^{m}x_{i_rj_r},\qquad \operatorname{Pf}_A(\varnothing)=1.
> $$
>
> This is an integral polynomial. To prove its transformation law, first work over the rational polynomial ring in all independent entries of $X$ and $B$. In the exterior algebra on $e^1,\ldots,e^{2m}$, put $\omega_X=\sum_{i<j}x_{ij}e^i\wedge e^j$. Terms with repeated indices vanish. Each matching occurs $m!$ times in the $m$th power because degree-$2$ factors commute, so
>
> $$
> \omega_X^m=m!\operatorname{Pf}_A(X)e^1\wedge\cdots\wedge e^{2m}.
> $$
>
> Pullback by the linear map with matrix $B$ replaces $X$ by $B^{\mathsf T}XB$ and multiplies the top exterior product by $\det B$. Cancelling $m!$ over this rational ring yields
>
> $$
> \operatorname{Pf}_A(B^{\mathsf T}XB)=\det(B)\operatorname{Pf}_A(X).
> $$
>
> Both sides are polynomials with integer coefficients. Equality over the rational polynomial ring therefore implies equality over the integral polynomial ring, and hence after substitution over every commutative ring. This step avoids division by $m!$ in the eventual coefficient ring and does not require $B$ to be invertible.
>
> **1. Interchange.** Let $B$ be the permutation matrix interchanging the two indices. Then $B^{\mathsf T}XB$ performs the required row and column interchange, and $\det B=-1$. The transformation law proves the claim.
>
> **2. Scaling.** Let $B$ be diagonal with entry $t$ at the chosen index and all other diagonal entries $1$. Then the same transformation performs precisely the specified simultaneous row and column scaling, and $\det B=t$. The diagonal entry being scaled twice is zero, so it introduces no additional contribution. The formula holds also for $t=0$ or a nonunit.
>
> **3. Linearity.** In each matching exactly one pair contains a fixed index $r$. Each monomial therefore contains exactly one entry incident with $r$, to the first power, and its remaining factors involve no index $r$. The sum is consequently a homogeneous linear expression in that row's independent entries, with the corresponding negative column entries understood. This does not mean linearity in all entries simultaneously: the total degree is $m$.
>
> **4. Cofactors.** In terms containing $x_{rs}$, delete the pair $\{r,s\}$. The remaining pairs form an arbitrary perfect matching of the ordered remaining indices. Moving $r$ and $s$ to the first two positions requires $(r-1)+(s-2)=r+s-3$ interchanges, which has the same parity as $r+s-1$. Moving an entire two-element pair past another pair makes four interchanges and contributes no further sign. Thus the signed coefficient sum is
>
> $$
> C_{rs}=(-1)^{r+s-1}\operatorname{Pf}_A(X^{\widehat r\widehat s}).
> $$
>
> For $r=1,s=2$, the sign is $+1$, giving the first formula. In size $2$, the deleted matrix has size $0$ and Pfaffian $1$.
>
> **5. Expansion.** Every matching contains exactly one pair $\{1,s\}$. Partitioning the matching sum according to that partner proves $\operatorname{Pf}_A(X)=\sum_{s=2}^n x_{1s}C_{1s}$. Inserting item 4 gives the equivalent signed-minor expansion.
>
> **6. Small sizes.** For $n=2$ the sole matching is $\{1,2\}$. For $n=4$ the three matchings are $(12)(34)$, $(13)(24)$, and $(14)(23)$, with signs $+,-,+$. Hence
>
> $$
> \operatorname{Pf}_A(X)=x_{12}x_{34}-x_{13}x_{24}+x_{14}x_{23}
> =x_{12}x_{34}+x_{13}x_{42}+x_{14}x_{23},
> $$
>
> which matches the source's use of $x_{42}=-x_{24}$.
>
> **7. Determinant from paired columns.** The specified matrix of pairings is $G=B^{\mathsf T}J_{\mathrm{int}}B$. The matching definition gives $\operatorname{Pf}_A(J_{\mathrm{int}})=1$: only the matching $(12)(34)\cdots(2m-1,2m)$ contributes. The transformation law therefore gives $\operatorname{Pf}_A(G)=\det B$, including singular $B$.
>
> **Conversion to Lang's normalization.** The only nonzero matching of $J_{\mathrm{grp}}$ has pairs $(1,m+1),\ldots,(m,2m)$. Its permutation has $m(m-1)/2$ inversions, so $\operatorname{Pf}_A(J_{\mathrm{grp}})=\varepsilon_m$. Multiplication by $\varepsilon_m$ gives Lang's normalization. In particular, for a size-$2m$ matrix, Lang's version of item 4 is $C^L_{rs}=(-1)^{r+s+m-2}\operatorname{Pf}_L(X^{\widehat r\widehat s})$, and item 7 becomes $\det B=\varepsilon_m\operatorname{Pf}_L(G)$. For $n=4$, Lang's Pfaffian is the negative of the formula in item 6.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Notes

- **Source and proof status:** Lang's exercise was checked on [S2, Ch. XV, Ex. 20, printed p. 599, PDF p. 614]. The seven external properties were checked directly on the scanned [1957 Artin book, printed p. 142 / PDF p. 154](https://archive.org/download/geometricalgebra033556mbp/geometricalgebra033556mbp.pdf#page=154); the preceding normalization and congruence statement are on printed p. 141 / PDF p. 153. The full independent proofs above do not infer missing formulas from OCR.
- **External-source identity:** This is Emil Artin's *Geometric Algebra*, Interscience, 1957, not Michael Artin's *Algebra*. The [Internet Archive record](https://archive.org/details/geometricalgebra033556mbp) supplies the 230-page scan; the PDF page numbers here refer to that scan.
- **Proof inputs:** Exterior-algebra anticommutativity and the determinant action on a top exterior power are used in the universal transformation proof. The matching expansion and the integral specialization argument are supplied explicitly. All seven identities hold for alternating matrices over any commutative ring, including characteristic $2$.
