---
title: "Exercise Rep131: The Little Group Method for Abelian Semidirect Products"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - clifford-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 7, printed p. 724, PDF p. 739"
created: 2026-09-29
---

# Exercise Rep131: The Little Group Method for Abelian Semidirect Products

## Problem Statement

> [!question] Lang XVIII.7
> Let $G$ be a finite group, semidirect product of $A,H$ where $A$ is commutative and normal. Let $\widehat A=\operatorname{Hom}(A,\mathbb C^*)$ be the dual group. Let $G$ operate by conjugation on characters, so that for $\sigma\in G$, $a\in A$, we have
>
> $$
> [\sigma]\psi(a)=\psi(\sigma^{-1}a\sigma).
> $$
>
> Let $\psi_1,\ldots,\psi_r$ be representatives of the orbits of $H$ in $\widehat A$, and let $H_i$ ($i=1,\ldots,r$) be the isotropy group of $\psi_i$. Let $G_i=AH_i$.
>
> (a) For $a\in A$ and $h\in H_i$, define $\psi_i(ah)=\psi_i(a)$. Show that $\psi_i$ is thus extended to a character on $G_i$.
>
> Let $\theta$ be a simple representation of $H_i$ (on a vector space over $\mathbb C$). From $H_i=G_i/A$, view $\theta$ as a simple representation of $G_i$. Let
>
> $$
> \rho_{i,\theta}=\operatorname{ind}_{G_i}^G(\psi_i\otimes\theta).
> $$
>
> (b) Show that $\rho_{i,\theta}$ is simple.
>
> (c) Show that $\rho_{i,\theta}\simeq\rho_{i',\theta'}$ implies $i=i'$ and $\theta\simeq\theta'$.
>
> (d) Show that every irreducible representation of $G$ is isomorphic to some $\rho_{i,\theta}$.

## Hints

> [!hint]- Hint 1: Use the weight spaces of $A$
> Because $A$ is finite abelian, every complex $A$-module is a direct sum of character spaces. For an $A$-character $\lambda$, its projection is $\lvert A\rvert^{-1}\sum_{a\in A}\lambda(a)^{-1}a$.

> [!hint]- Hint 2: Identify one distinguished weight space
> In the induced representation, the distinct cosets of $G_i$ give distinct $A$-weights in the orbit of $\psi_i$. The $\psi_i$-weight space recovers $\theta$ by restriction to $H_i$. Apply the same construction to an arbitrary irreducible $G$-module.

## Solution

> [!success]- Independent proof of the classification
> **Weight-space facts.** Every element of $A$ acts on a complex representation by a finite-order operator, hence is diagonalizable: its minimal polynomial divides $X^m-1$, which has distinct roots in $\mathbb C$. Commuting diagonalizable operators are simultaneously diagonalizable, by decomposing into the eigenspaces of one operator and then repeating on the invariant eigenspaces. Thus every $A$-module $V$ decomposes as
>
> $$
> V=\bigoplus_{\lambda\in\widehat A}V_\lambda,\qquad
> V_\lambda=\{v:av=\lambda(a)v\text{ for every }a\in A\}.
> $$
>
> The operator $P_\lambda=\lvert A\rvert^{-1}\sum_{a\in A}\lambda(a)^{-1}a$ projects onto $V_\lambda$. To check this, its scalar on $V_\nu$ is the average of the character $\lambda^{-1}\nu$, which is $1$ for $\nu=\lambda$ and $0$ otherwise: translation preserves the sum of a character's values while multiplying it by the value at the translating element. For a nontrivial character, choose that element so its value differs from $1$; the sum must then vanish. In particular, every $A$-stable subspace decomposes into its intersections with the weight spaces. Finally, normality gives
>
> $$
> gV_\lambda=V_{[g]\lambda}.
> $$
>
> **(a).** The semidirect product gives each element of $G_i$ a unique expression $ah$, with $a\in A$, $h\in H_i$. Since $h$ fixes $\psi_i$,
>
> $$
> \psi_i\bigl((ah)(a'h')\bigr)
> =\psi_i\bigl(a(ha'h^{-1})\bigr)
> =\psi_i(a)\psi_i(a')
> =\psi_i(ah)\psi_i(a'h').
> $$
>
> Thus the formula defines a one-dimensional character of $G_i$, trivial on $H_i$. The quotient map $G_i\to H_i$, $ah\mapsto h$, inflates $\theta$ to $G_i$. Its twist $U=\psi_i\otimes\theta$ remains irreducible, since multiplying each operator by a nonzero scalar leaves invariant subspaces unchanged. The subgroup $A$ acts on $U$ by the single weight $\psi_i$.
>
> **(b).** Since $A$ acts trivially by conjugation on $\widehat A$, the stabilizer of $\psi_i$ in $G$ is exactly $G_i=AH_i$. Choose left coset representatives $T$ for $G/G_i$, including $1$. The induced space is
>
> $$
> M=\mathbb C[G]\otimes_{\mathbb C[G_i]}U
> =\bigoplus_{t\in T}t\otimes U.
> $$
>
> For $a\in A$, the action on $t\otimes U$ is scalar $\psi_i(t^{-1}at)=[t]\psi_i(a)$. These weights are distinct for distinct cosets, since $G_i$ is the stabilizer. Hence these summands are precisely the nonzero weight spaces of $M$.
>
> Let $0\ne W\subset M$ be $G$-stable. The projections $P_\lambda$ show that $W$ has a nonzero intersection with one weight space. Translating by $G$ yields $W\cap(1\otimes U)\ne0$. This intersection is $G_i$-stable, so irreducibility of $U$ implies $1\otimes U\subset W$. Its $G$-translates fill $M$, giving $W=M$. Therefore $\rho_{i,\theta}$ is irreducible.
>
> **(c).** A $G$-isomorphism preserves all $A$-weight spaces, so isomorphic induced modules have the same weight orbit. Since the $\psi_i$ represent distinct orbits, this implies $i=i'$. Their $\psi_i$-weight spaces are then isomorphic as $G_i$-modules. Restricting to $H_i$, on which the extended $\psi_i$ is trivial, recovers $\theta\simeq\theta'$.
>
> **(d).** Let $V$ be any irreducible $G$-module. The sum of the weight spaces in one $G$-orbit is a $G$-stable subspace, so its nonzero weights form a single orbit. This orbit contains exactly one representative $\psi_i$. Put $W=V_{\psi_i}$. The stabilizer $G_i$ preserves $W$.
>
> To see that $W$ is irreducible under $G_i$, take a nonzero $G_i$-stable subspace $U\subset W$. The direct sum $\bigoplus_{t\in T}tU$ lies in the distinct weight spaces $tW$. Writing $gt=t'h$ with $h\in G_i$ shows this sum is $G$-stable, so it equals $V$. Its $\psi_i$-weight space is $U$, hence $U=W$.
>
> Let $\theta$ be the representation of $H_i$ on $W$. Since $A$ acts by scalars on $W$, an $H_i$-stable subspace is automatically $G_i$-stable; thus $\theta$ is irreducible. The $G_i$-action on $W$ is $ah\mapsto\psi_i(a)\theta(h)$, namely $\psi_i\otimes\theta$. Finally,
>
> $$
> \mathbb C[G]\otimes_{\mathbb C[G_i]}W\longrightarrow V,\qquad
> g\otimes w\longmapsto gw
> $$
>
> maps its coset summands isomorphically onto the distinct weight spaces $tW$, which exhaust $V$. It is a $G$-isomorphism, proving $V\simeq\rho_{i,\theta}$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic components and the little group method]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced representations]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation theory]]

## Notes

- Source checked directly: [S2, Ch. XVIII, Exercise 7, printed p. 724, PDF p. 739]. The printed equality $H_i=G_i/A$ denotes the canonical isomorphism supplied by the chosen semidirect product.
- Proof status: independent derivation, including the weight projections and the irreducibility, uniqueness, and completeness arguments.
- The commutativity of $A$ and the splitting $G=A\rtimes H$ are essential to this formulation: they provide one-dimensional weights and the explicit extension $\psi_i(ah)=\psi_i(a)$. Such an extension is not automatic for a general normal subgroup and its inertia group.
- The degree is $[G:G_i]\dim\theta=[H:H_i]\dim\theta$.
