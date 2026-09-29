---
title: "Exercise Rep134: Irreducibility of Principal Series for SL2 over a Finite Field"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - induced-representations
  - finite-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 10, printed p. 724, PDF p. 739"
created: 2026-09-29
---

# Exercise Rep134: Irreducibility of Principal Series for SL2 over a Finite Field

## Problem Statement

> [!question] Lang XVIII.10
> Let $F$ be a finite field and let $G=SL_2(F)$. Let $B$ be the subgroup of $G$ consisting of all matrices
> $$
> \alpha=\begin{pmatrix}a&b\\0&d\end{pmatrix}\in SL_2(F),
> \quad\text{so }d=a^{-1}.
> $$
> Let $\mu:F^\times\to\mathbb C^\times$ be a homomorphism and let $\psi_\mu:B\to\mathbb C^\times$ be the homomorphism such that $\psi_\mu(\alpha)=\mu(a)$. Show that the induced character $\operatorname{ind}_B^G(\psi_\mu)$ is simple if $\mu^2\ne1$.

## Hints

> [!hint]- Hint 1: Find the two double cosets
> With $w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, prove $G=B\sqcup BwB$. Also compute $B\cap wBw^{-1}$.

> [!hint]- Hint 2: Compare the two characters on the intersection
> On the diagonal torus, conjugation by $w$ replaces $a$ by $a^{-1}$. Use the equivariant-kernel description of endomorphisms of an induced module to see when a kernel may be nonzero on $BwB$.

## Solution

> [!success]- Independent double-coset calculation using the proved kernel isomorphism
> Put $q=|F|$ and
> $$
> n(u)=\begin{pmatrix}1&u\\0&1\end{pmatrix},\qquad
> t(a)=\begin{pmatrix}a&0\\0&a^{-1}\end{pmatrix},\qquad
> w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
> $$
> The upper-left entry of a product in $B$ is the product of its upper-left entries. Thus $\psi=\psi_\mu$ is indeed a one-dimensional character of $B$.
>
> **1. Bruhat decomposition in this case.** A matrix $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ lies in $B$ if $c=0$. If $c\ne0$, the equation $ad-bc=1$ gives the explicit factorization
> $$
> g=n(a/c)\,w\,t(c)\,n(d/c).
> $$
> Multiplying the matrices gives upper-right entry $(ad-1)/c=b$ and the other three entries $a,c,d$. Hence $G=B\sqcup BwB$; the two pieces are disjoint because matrices in $BwB$ have nonzero lower-left entry. Moreover
> $$
> B\cap wBw^{-1}=T=\{t(a):a\in F^\times\},
> \qquad w^{-1}t(a)w=t(a^{-1}).
> $$
> The intersection consists of matrices that are both upper and lower triangular.
>
> **2. Endomorphisms as scalar kernels.** Let $M=\operatorname{Ind}_B^G\mathbb C_\psi$. The explicit kernel isomorphism proved in [[06 - Representation Theory/Exercises/Exercise Rep139 - Equivariant Kernels between Induced Modules|Rep139]] identifies $\operatorname{End}_G(M)$ with
> $$
> \mathcal K_\psi=
> \{K:G\to\mathbb C:
> K(b_2gb_1)=\psi(b_2)\psi(b_1)K(g),\ b_1,b_2\in B\}.
> $$
> This is the corrected, proved kernel convention; it does not use the defective printed formula of Exercise 15. In particular, one scalar $K(g)$ determines the kernel on each double coset $BgB$.
>
> We check exactly when that scalar is allowed. If $h\in B\cap gBg^{-1}$, then $hg=g(g^{-1}hg)$, and the two kernel rules imply
> $$
> \bigl(\psi(h)-\psi(g^{-1}hg)\bigr)K(g)=0.
> $$
> Conversely, if the two characters agree on the intersection, the rule for $K(b_2gb_1)$ is well-defined for any chosen value $K(g)$. Indeed, equality $b_2gb_1=b_2'gb_1'$ implies
> $$
> h=b_2'^{-1}b_2=g b_1'b_1^{-1}g^{-1}\in B\cap gBg^{-1}.
> $$
> The ratio of the two prescribed nonzero character factors is $\psi(h)/\psi(g^{-1}hg)=1$. This proves both necessity and sufficiency.
>
> On the double coset $B$ the condition is automatic, contributing one dimension. On $BwB$ it is
> $$
> \mu(a)=\mu(a^{-1})\quad\text{for every }a\in F^\times,
> $$
> equivalently $\mu^2=1$. Therefore
> $$
> \dim_{\mathbb C}\operatorname{End}_G(M)
> =1+\begin{cases}1,&\mu^2=1,\\0,&\mu^2\ne1.\end{cases}
> $$
>
> **3. Conclude irreducibility.** Maschke's theorem decomposes $M$ as a direct sum of pairwise nonisomorphic irreducibles $V_i$ with multiplicities $m_i\ge0$. Schur's lemma gives
> $$
> \dim_{\mathbb C}\operatorname{End}_G(M)=\sum_i m_i^2.
> $$
> Since $M\ne0$, this dimension is one exactly when $M$ is irreducible. Under the hypothesis $\mu^2\ne1$ the preceding calculation gives one, proving the assertion.
>
> The same calculation shows that when $\mu^2=1$, $M$ is the sum of two distinct irreducibles, each with multiplicity one. In every case its dimension is $[G:B]=q+1$: $G$ acts transitively on the $q+1$ lines of $F^2$, and the stabilizer of the first coordinate line is $B$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced representations]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic decomposition]]
- [[06 - Representation Theory/Exercises/Exercise Rep139 - Equivariant Kernels between Induced Modules|Equivariant kernels]]
- [[06 - Representation Theory/Exercises/Exercise Rep135 - Character Tables of SL2 over Finite Fields|Complete SL2 character tables]]

## Notes

- **Source and proof status:** The matrices, character definition, and condition $\mu^2\ne1$ were checked on [S2, Ch. XVIII, Exercise 10, printed p. 724, PDF p. 739]. The factorization and kernel calculation are independent; the kernel theorem is proved explicitly in Rep139.
- **Textbook comparison:** The calculation agrees with Lang's double-coset inner-product and irreducibility criteria [S2, Ch. XVIII, Corollaries 7.8–7.9, printed p. 696, PDF p. 711], whose original page was checked. It spells out the two double cosets and their compatibility conditions.
- **Small fields:** For $q=2,3$, every character of $F^\times$ satisfies $\mu^2=1$, so the exercise's sufficient hypothesis has no examples. The endomorphism calculation and reducibility conclusion still apply.
- **Coefficients:** The group is defined over the finite field $F$; its representations in this note are over $\mathbb C$, not in the characteristic of $F$.
