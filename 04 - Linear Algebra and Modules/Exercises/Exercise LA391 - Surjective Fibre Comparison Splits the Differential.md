---
title: "Exercise LA391: Surjective Fibre Comparison Splits the Differential"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - cohomology
  - base-change
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 18, printed p. 446, PDF p. 461"
created: 2026-09-22
---

# Exercise LA391: Surjective Fibre Comparison Splits the Differential

## Problem Statement

> [!question] Exercise 18
> Let $A$ be a Noetherian local ring. Let $K$ be a finite complex, as follows:
>
> $$
> 0\longrightarrow K^0\longrightarrow\cdots\longrightarrow K^n\longrightarrow0,
> $$
>
> such that $K^i$ is finite free for all $i$. For some index $i$ assume that
>
> $$
> H^i(K)(\mathfrak m)\longrightarrow H^i(K(\mathfrak m))
> $$
>
> is surjective. Prove:
>
> (a) This map is an isomorphism.
>
> (b) The following exact sequences split:
>
> $$
> 0\longrightarrow\ker d^i\longrightarrow K^i\longrightarrow\operatorname{Im}d^i\longrightarrow0,
> $$
>
> $$
> 0\longrightarrow\operatorname{Im}d^i\longrightarrow K^{i+1}.
> $$
>
> (c) Every term in these sequences is free.

> [!info] Conventions and the printed second sequence
> Here $\mathfrak m$ is the maximal ideal, $M(\mathfrak m)=M/\mathfrak mM$, and $d^j:K^j\to K^{j+1}$. We use $H^j=\ker d^j/\operatorname{Im}d^{j-1}$, correcting the shared preamble's index errors as recorded in [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]]. The second printed sequence ends at $K^{i+1}$; saying that it splits means that this inclusion has a retraction, or equivalently that its cokernel gives a split short exact sequence. The source gives no hint for Exercise 18.

## Hints

> [!hint]- Hint 1
> Let $r$ be the rank of $d^i$ modulo $\mathfrak m$. An invertible $r\times r$ minor lets you put $d^i$ in block form $\operatorname{diag}(I_r,g)$, where all entries of $g$ lie in $\mathfrak m$.

> [!hint]- Hint 2
> All residue-field cycles lie in the source of $g$. Surjectivity on cohomology says that every such cycle is the reduction of an actual cycle up to a boundary; boundaries are already actual cycles. Apply Nakayama to the quotient of the source of $g$ by $\ker g$.

## Solution

> [!success]- Independently derived solution
> Put $k=A/\mathfrak m$, $E=K^i$, $F=K^{i+1}$, $f=d^i$, and $a=d^{i-1}$. Write a bar for tensoring with $k$, and extend the complex by zero at its endpoints.
>
> **1. Isolate the part of $f$ visible modulo $\mathfrak m$.** Let $r=\operatorname{rank}_k\overline f$. If $r>0$, permute bases so that an $r\times r$ minor with nonzero residue is the upper-left block $U$. Its determinant is a unit of the local ring, so $U$ is invertible. Writing
>
> $$
> f=\begin{pmatrix}U&V\\W&T\end{pmatrix},
> $$
>
> invertible row and column operations replace this matrix by
>
> $$
> \begin{pmatrix}I_r&0\\0&T-WU^{-1}V\end{pmatrix}.
> $$
>
> The lower block has zero reduction, since the total reduced rank is $r$. This gives decompositions into finite free modules
>
> $$
> E=E_1\oplus E_0,\qquad F=F_1\oplus F_0,
> \qquad f(x,y)=(x,g(y)),
> $$
>
> identifying $E_1$ with $F_1$, and with $g(E_0)\subseteq\mathfrak mF_0$. If $r=0$, take $E_1=F_1=0$ and $g=f$; the same description holds.
>
> **2. Surjectivity forces $g=0$.** The relation $fa=0$ shows that $a$ has zero $E_1$-component and that its $E_0$-component $a_0$ takes values in $\ker g$. We have
>
> $$
> \ker f=0\oplus\ker g,\qquad
> \ker\overline f=0\oplus(E_0/\mathfrak mE_0).
> $$
>
> Take any $\overline y\in E_0/\mathfrak mE_0$. Its class in $H^i(K\otimes_Ak)$ comes, by the assumed surjectivity, from a class in $H^i(K)/\mathfrak mH^i(K)$. Represent that class by an actual cycle $z\in\ker g$. Equality of the two cohomology classes means
>
> $$
> \overline y-\overline z=\overline{a_0}(\overline u)
> $$
>
> for some $\overline u\in K^{i-1}/\mathfrak mK^{i-1}$. Lift $\overline u$ to $u\in K^{i-1}$. Then $z+a_0(u)\in\ker g$ reduces to $\overline y$. We have proved
>
> $$
> E_0=\ker g+\mathfrak mE_0.
> $$
>
> The finite module $Q=E_0/\ker g$ therefore satisfies $Q=\mathfrak mQ$. Local Nakayama, proved in the linked concept note, gives $Q=0$. Hence $\ker g=E_0$ and $g=0$.
>
> **3. Prove (b) and (c).** The resulting matrix is $\operatorname{diag}(I_r,0)$. Consequently
>
> $$
> \ker f=E_0,\quad\operatorname{Im}f=F_1,\quad
> E=E_1\oplus E_0,\quad F=F_1\oplus F_0.
> $$
>
> The inverse of $f|_{E_1}:E_1\to F_1$ splits $E\twoheadrightarrow\operatorname{Im}f$, and the projection $F\to F_1$ retracts the image inclusion. All displayed modules are finite free, proving (b) and (c). In fact the omitted cokernel in the second sequence is the free module $F_0$.
>
> **4. Prove (a).** Let $Z=\ker f=E_0$ and $B=\operatorname{Im}a\subseteq Z$. The splitting already proved identifies $Z\otimes_Ak$ with $\ker\overline f$. Right exactness applied to $K^{i-1}\xrightarrow{a}Z\to Z/B\to0$ gives
>
> $$
> H^i(K)\otimes_Ak
> \cong\frac{Z\otimes_Ak}{\operatorname{Im}(K^{i-1}\otimes_Ak\to Z\otimes_Ak)}
> =H^i(K\otimes_Ak).
> $$
>
> This map sends $[z]\otimes\lambda$ to $[z\otimes\lambda]$, so it is precisely the comparison map in the question. Thus the assumed surjection is an isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules and Nakayama's Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source status:** The hypothesis and all three conclusions were visually checked at [S2, Ch. X, Ex. 18, printed p. 446, PDF p. 461]. The degree convention comes from the corrected reading of the preamble at printed p. 445, PDF p. 460. The proof is independent.
- **Hypothesis distinction:** Unlike Exercises 15-17, this exercise does not assume that $A$ is reduced. The argument uses unit minors, finite generation, and Nakayama.
- **Boundary:** The conclusion does not assert that $H^i(K)$ is free. The two-term multiplication-by-$t$ complex in the concept note gives an isomorphism in degree $1$ with nonfree $H^1$.
- **Stronger consequence:** The outgoing splittings prove the comparison isomorphism in this degree after any base change $A\to R$, by the same right-exact cokernel argument.
