---
title: "Exercise LA480: Hom and Tensor Comparison for Finite Presentations"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - flatness
  - finite-presentation
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 11, printed pp. 638–639, PDF pp. 653–654"
created: 2026-09-29
---

# Exercise LA480: Hom and Tensor Comparison for Finite Presentations

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 11
> Let $P,M,E$ be modules over the commutative ring $A$. If $P$ is finitely generated (resp. finitely presented) and $E$ is flat, show that the natural homomorphism
>
> $$
> \operatorname{Hom}_A(P,M)\otimes_A E
> \longrightarrow\operatorname{Hom}_A(P,M\otimes_A E)
> $$
>
> is a monomorphism (resp. an isomorphism).
>
> **Printed hint.** Let $F_1\to F_0\to P\to0$ be a finite presentation, say. Consider the diagram
>
> $$
> \begin{array}{ccccccc}
> 0&\longrightarrow&\operatorname{Hom}_A(P,M)\otimes_A E
> &\longrightarrow&\operatorname{Hom}_A(F_0,M)\otimes_A E
> &\longrightarrow&\operatorname{Hom}_A(F_1,M)\otimes_A E\\
> &&\downarrow&&\downarrow&&\downarrow\\
> 0&\longrightarrow&\operatorname{Hom}_A(P,M\otimes_A E)
> &\longrightarrow&\operatorname{Hom}_A(F_0,M\otimes_A E)
> &\longrightarrow&\operatorname{Hom}_A(F_1,M\otimes_A E).
> \end{array}
> $$

## Hints

> [!hint]- Hint 1: Begin with a finite free module
> Write the natural map as $\phi\otimes e\mapsto[p\mapsto\phi(p)\otimes e]$. If $P=A^n$ with $n$ finite, both sides identify with $(M\otimes_A E)^n$.

> [!hint]- Hint 2: Use only the presentation you have
> For finite generation, take a surjection from a finite free module and compare injections obtained by precomposition. For finite presentation, both $F_0$ and $F_1$ are finite free, so the last two vertical maps in the printed diagram are isomorphisms. Compare their kernels.

## Solution

> [!success]- Independent derivation by comparison of kernels
> For any $A$-module $Q$, define
>
> $$
> \theta_Q:\operatorname{Hom}_A(Q,M)\otimes_A E
> \longrightarrow\operatorname{Hom}_A(Q,M\otimes_A E),
> \qquad \theta_Q(\phi\otimes e)(q)=\phi(q)\otimes e.
> $$
>
> The formula is additive in $\phi,e$ and is balanced because $(a\phi)(q)\otimes e=\phi(q)\otimes ae$. It therefore defines an $A$-linear map. It is natural in $Q$ for precomposition: if $v:Q'\to Q$, then evaluating on $q'\in Q'$ gives $\theta_{Q'}((\phi\circ v)\otimes e)(q')=\theta_Q(\phi\otimes e)(v(q'))$.
>
> If $Q=A^n$ for a finite $n$, evaluation on the standard basis identifies $\operatorname{Hom}_A(Q,M)$ with $M^n$. Finite direct sums commute with tensor product: the isomorphism sends $(m_1,\ldots,m_n)\otimes e$ to $(m_1\otimes e,\ldots,m_n\otimes e)$, with inverse induced by the coordinate inclusions. Under these identifications $\theta_Q$ is the identity comparison with $(M\otimes_A E)^n$, hence is an isomorphism.
>
> **Finite generation: injectivity.** Choose a surjection $\pi:F_0\twoheadrightarrow P$ with $F_0$ finite free. Precomposition gives an injection
>
> $$
> \pi^*:\operatorname{Hom}_A(P,M)\hookrightarrow\operatorname{Hom}_A(F_0,M),
> $$
>
> because two maps agreeing after a surjection agree everywhere. Since $E$ is flat, $\pi^*\otimes\operatorname{id}_E$ is still injective. Precomposition likewise injects $\operatorname{Hom}_A(P,M\otimes_A E)$ into $\operatorname{Hom}_A(F_0,M\otimes_A E)$. Naturality makes the resulting square commute.
>
> If $z$ lies in the kernel of $\theta_P$, its image under $\pi^*\otimes\operatorname{id}_E$ lies in the kernel of the isomorphism $\theta_{F_0}$. This image is zero, and injectivity of $\pi^*\otimes\operatorname{id}_E$ gives $z=0$. Thus $\theta_P$ is injective.
>
> **Finite presentation: surjectivity.** Choose a presentation $F_1\xrightarrow{d}F_0\xrightarrow{\pi}P\to0$ with $F_0,F_1$ finite free. For every module $N$, precomposition gives an exact sequence
>
> $$
> 0\longrightarrow\operatorname{Hom}_A(P,N)
> \xrightarrow{\pi^*}\operatorname{Hom}_A(F_0,N)
> \xrightarrow{d^*}\operatorname{Hom}_A(F_1,N).
> $$
>
> Indeed, a map $F_0\to N$ is killed by $d^*$ precisely when it vanishes on $\operatorname{im}d=\ker\pi$, which is precisely the condition for it to factor uniquely through $P$. Taking $N=M$ and tensoring with flat $E$ gives the exact top row of the printed diagram. Taking $N=M\otimes_A E$ gives its exact bottom row. The diagram commutes by naturality, and $\theta_{F_0},\theta_{F_1}$ are isomorphisms by the finite free case.
>
> Let $f:P\to M\otimes_A E$. Its image $f\pi$ in the middle bottom term has a unique preimage $z$ under $\theta_{F_0}$. Commutativity gives
>
> $$
> \theta_{F_1}\bigl((d^*\otimes\operatorname{id}_E)(z)\bigr)
> =(f\pi)d=0.
> $$
>
> Injectivity of $\theta_{F_1}$ implies $(d^*\otimes\operatorname{id}_E)(z)=0$. Exactness of the top row gives $w\in\operatorname{Hom}_A(P,M)\otimes_A E$ with $(\pi^*\otimes\operatorname{id}_E)(w)=z$. The left square shows that $\theta_P(w)\pi=f\pi$. Since $\pi$ is surjective, $\theta_P(w)=f$. Thus $\theta_P$ is surjective and, by the finite-generation argument, an isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated and Finitely Presented Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** The statement and the complete printed hint diagram were checked against [S2, Ch. XVI, Ex. 11, printed pp. 638–639, PDF pp. 653–654]. The diagram is transcribed as searchable mathematics. The proof is independently expanded from the suggested presentation argument.
- **Boundary:** Finite generation supplies only $F_0$ of finite rank and proves injectivity. Finite presentation additionally makes $F_1$ finite free, which is what proves surjectivity. The flatness hypothesis is used to preserve the exactness of the top row.
