---
title: "Exercise LA361: Projective Modules over Dedekind Rings and K0"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - projective-modules
  - dedekind-rings
  - grothendieck-groups
  - ideal-class-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 13, printed pp. 168-169, PDF pp. 183-184"
created: 2026-08-29
---

# Exercise LA361: Projective Modules over Dedekind Rings and K0

## Problem Statement

> [!question] Exercise 13
> Let $\mathfrak o$ be a Dedekind ring.
>
> **(a)** Let $M$ be a finite projective $\mathfrak o$-module. Show that there exist free modules $F,F'$ such that
>
> $$
> F\supset M\supset F',
> $$
>
> and $F,F'$ have the same rank, which is called the rank of $M$.
>
> **(b)** Prove that there exist a basis $\{e_1,\ldots,e_n\}$ of $F$ and ideals $\mathfrak a_1,\ldots,\mathfrak a_n$ such that
>
> $$
> M=\mathfrak a_1e_1+\cdots+\mathfrak a_ne_n,
> $$
>
> or, in other words,
>
> $$
> M\cong\bigoplus_{i=1}^n\mathfrak a_i.
> $$
>
> **(c)** Prove that
>
> $$
> M\cong\mathfrak o^{\,n-1}\oplus\mathfrak a
> $$
>
> for some ideal $\mathfrak a$, and that the association $M\mapsto\mathfrak a$ induces an isomorphism of $K_0(\mathfrak o)$ with the ideal class group $\operatorname{Pic}(\mathfrak o)$. Here $K_0(\mathfrak o)$ is the group of equivalence classes of projective modules defined at the end of §4.

## Hints

> [!hint]- Hint 1
> Let $K$ be the quotient field. Choose a $K$-basis of $K\otimes_{\mathfrak o}M$ represented by elements of $M$, then clear the denominators of a finite generating set of $M$.

> [!hint]- Hint 2
> For (b), choose a nonzero $K$-linear functional on $K\otimes M$. Its image on $M$ is a fractional ideal, and the resulting surjection splits because that ideal is projective.

> [!hint]- Hint 3
> Repeatedly apply
>
> $$
> \mathfrak a\oplus\mathfrak b
> \cong
> \mathfrak o\oplus\mathfrak a\mathfrak b.
> $$
>
> Use the top exterior power to see that the ideal class of the final factor is independent of all choices.

## Solution

> [!success]- Solution
> Let $K$ be the quotient field of $\mathfrak o$.
>
> **(a)** Since $M$ is a direct summand of a finite free module, it is torsion-free. Set
>
> $$
> n=\dim_K(K\otimes_{\mathfrak o}M).
> $$
>
> Choose $u_1,\ldots,u_n\in M$ whose images form a $K$-basis. Then
>
> $$
> F'=\mathfrak o u_1\oplus\cdots\oplus\mathfrak o u_n
> $$
>
> is a free submodule of $M$ of rank $n$. Let $m_1,\ldots,m_r$ generate $M$. Expressing the $m_j$ in the basis $u_1,\ldots,u_n$ and clearing all finitely many denominators gives a nonzero $d\in\mathfrak o$ such that
>
> $$
> dM\subseteq F'.
> $$
>
> Hence
>
> $$
> F=d^{-1}F'
> $$
>
> is free of rank $n$ and satisfies
>
> $$
> F\supseteq M\supseteq F'.
> $$
>
> The common rank is intrinsic because it equals $\dim_K(K\otimes M)$.
>
> **(b)** We prove the direct-sum description by induction on $n$. There is nothing to prove for $n=0$. Suppose $n\ge1$ and choose a nonzero $K$-linear functional
>
> $$
> \lambda:K\otimes_{\mathfrak o}M\longrightarrow K.
> $$
>
> The image $\lambda(M)$ is a nonzero fractional ideal. After multiplying $\lambda$ by a nonzero element of $K$, we may assume
>
> $$
> \mathfrak a_n=\lambda(M)\subseteq\mathfrak o.
> $$
>
> We have a short exact sequence
>
> $$
> 0\longrightarrow N\longrightarrow M
> \xrightarrow{\lambda}\mathfrak a_n\longrightarrow0.
> $$
>
> The ideal $\mathfrak a_n$ is finitely generated and torsion-free, hence projective by Exercise III.11. Therefore the sequence splits:
>
> $$
> M\cong N\oplus\mathfrak a_n.
> $$
>
> The module $N$ is finite projective of rank $n-1$. Induction gives ideals $\mathfrak a_1,\ldots,\mathfrak a_{n-1}$ with
>
> $$
> N\cong\bigoplus_{i=1}^{n-1}\mathfrak a_i.
> $$
>
> Consequently
>
> $$
> M\cong\bigoplus_{i=1}^n\mathfrak a_i.
> $$
>
> Identify this direct sum with the submodule
>
> $$
> \mathfrak a_1e_1+\cdots+\mathfrak a_ne_n
> \subseteq
> \mathfrak o e_1\oplus\cdots\oplus\mathfrak o e_n.
> $$
>
> Taking the free module on the right as the ambient $F$ in part (a) gives the asserted basis form.
>
> **(c)** Exercise III.12(a) gives
>
> $$
> \mathfrak a_1\oplus\mathfrak a_2
> \cong
> \mathfrak o\oplus\mathfrak a_1\mathfrak a_2.
> $$
>
> Iterating this identity yields, for $n\ge1$,
>
> $$
> M\cong
> \mathfrak o^{\,n-1}\oplus\mathfrak a,
> \qquad
> \mathfrak a=\mathfrak a_1\cdots\mathfrak a_n.
> $$
>
> The ideal class of $\mathfrak a$ is intrinsic. Indeed,
>
> $$
> \bigwedge_{\mathfrak o}^n M
> \cong
> \mathfrak a_1\otimes_{\mathfrak o}\cdots
> \otimes_{\mathfrak o}\mathfrak a_n
> \cong
> \mathfrak a,
> $$
>
> so another decomposition produces an isomorphic fractional ideal and therefore the same class in $\operatorname{Pic}(\mathfrak o)$.
>
> Lang's $K_0(\mathfrak o)$ here uses stable equivalence modulo finite free summands:
>
> $$
> P\sim Q
> \quad\Longleftrightarrow\quad
> P\oplus F_1\cong Q\oplus F_2
> $$
>
> for finite free $F_1,F_2$. Thus it is the reduced projective group, usually denoted $\widetilde K_0(\mathfrak o)$ in modern notation, rather than the modern unreduced $K_0$.
>
> Define
>
> $$
> \Phi:K_0(\mathfrak o)\longrightarrow\operatorname{Pic}(\mathfrak o),
> \qquad
> [M]\longmapsto[\mathfrak a].
> $$
>
> The exterior-power description shows that free summands do not change $[\mathfrak a]$, so $\Phi$ is well-defined. Part (a) of Exercise III.12 shows that direct sum corresponds to multiplication of ideal classes, hence $\Phi$ is a homomorphism. It is surjective because every nonzero ideal is a rank-one finite projective module. If $\Phi([M])$ is trivial, then $\mathfrak a$ is principal, and the normal form makes $M$ free; its stable class is therefore zero. Thus $\Phi$ is injective and
>
> $$
> K_0(\mathfrak o)\cong\operatorname{Pic}(\mathfrak o).
> $$
>
> The displayed normal form requires $n\ge1$. When $M=0$ has rank $0$, it is handled separately: it represents the neutral stable class and maps to the identity ideal class $[\mathfrak o]$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA359 - Torsion-Free Modules over Dedekind Rings Are Projective|Exercise LA359]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA360 - Direct Sums Duals and Fractional Ideals|Exercise LA360]]

## Notes

- **Notation boundary:** Lang's $K_0$ in this exercise is the stable, reduced group. Modern unreduced $K_0(\mathfrak o)$ also records rank and is therefore not the group identified here with $\operatorname{Pic}(\mathfrak o)$.
- **Rank-zero boundary:** The formula $\mathfrak o^{\,n-1}\oplus\mathfrak a$ is asserted only for $n\ge1$; the zero module is treated separately.
- **Routing rationale:** Free lattices, projective splittings, direct sums, and exterior powers are the primary tools, with ideal classes supplying the invariant.
- **Source status:** Part (a)'s inclusions $F\supset M\supset F'$, the common-rank statement, and parts (b)-(c) were visually checked across [S2, Ch. III, Ex. 13, printed pp. 168-169, PDF pp. 183-184]. The classification proof is independent.
