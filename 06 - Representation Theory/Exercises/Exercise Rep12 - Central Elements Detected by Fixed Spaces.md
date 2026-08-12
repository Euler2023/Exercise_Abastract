---
title: "Exercise Rep12: Central Elements Detected by Fixed Spaces"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - characters
  - group-actions
source: "Alibaba Global Mathematics Competition 2021 Final, Problem 1 (user-supplied image; English translation)"
created: 2026-08-12
---

# Exercise Rep12: Central Elements Detected by Fixed Spaces

## Problem Statement

> [!question] Problem 1
> Let $G$ be a finite group and let $H_1,H_2\leq G$ be subgroups. Suppose that, for every finite-dimensional complex representation $V$ of $G$,
>
> $$
> \dim V^{H_1}=\dim V^{H_2},
> $$
>
> where $V^{H_i}$ is the subspace consisting of the vectors fixed by every element of $H_i$, for $i=1,2$. Prove that
>
> $$
> Z(G)\cap H_1=Z(G)\cap H_2,
> $$
>
> where $Z(G)$ is the center of $G$.

## Hints

> [!hint]- Hint 1
> Associate to each $H_i$ the permutation representation $\mathbb{C}[G/H_i]$.

> [!hint]- Hint 2
> For an irreducible representation $V$, relate $\dim V^{H_i}$ to the multiplicity of $V$ in $\mathbb{C}[G/H_i]$.

> [!hint]- Hint 3
> If $z\in Z(G)$, determine the number of left cosets of $H_i$ fixed by $z$. Centrality makes this number either $0$ or all of $[G:H_i]$.

## Solution

> [!success]- Solution
> For a subgroup $H\leq G$, let
>
> $$
> M_H=\mathbb{C}[G/H]
> $$
>
> be the permutation representation on the left cosets of $H$, and let $\pi_H$ be its character.
>
> We first recall the elementary form of Frobenius reciprocity needed here. For any representation $V$ of $G$, evaluation at the coset $H$ gives an isomorphism
>
> $$
> \operatorname{Hom}_G(M_H,V)\longrightarrow V^H,
> \qquad
> T\longmapsto T(H).
> $$
>
> Indeed, $T(H)$ is fixed by $H$. Conversely, if $v\in V^H$, the rule
>
> $$
> gH\longmapsto gv
> $$
>
> is well-defined and extends linearly to a $G$-homomorphism $M_H\to V$.
>
> Apply this to every irreducible complex representation $V$. Complex representations of finite groups are completely reducible: if $W\subseteq U$ is invariant, choose any projection $P:U\to W$ and average it to
>
> $$
> P_G=\frac{1}{|G|}\sum_{g\in G}gPg^{-1}.
> $$
>
> Then $P_G$ is a $G$-equivariant projection onto $W$, so $U=W\oplus\ker P_G$. Moreover, Schur's lemma gives
>
> $$
> \dim\operatorname{Hom}_G(W,V)=
> \begin{cases}
> 1,&W\cong V,\\
> 0,&W\not\cong V
> \end{cases}
> $$
>
> for irreducible complex representations $V,W$: a nonzero map is an isomorphism, and an endomorphism of $V$ has an eigenvalue over $\mathbb{C}$, so subtracting that scalar gives a noninvertible endomorphism and hence the zero map. It follows that the dimension of $\operatorname{Hom}_G(M_H,V)$ is the multiplicity of $V$ in $M_H$. Thus that multiplicity is $\dim V^H$. The hypothesis therefore says that $M_{H_1}$ and $M_{H_2}$ contain every irreducible representation with the same multiplicity. Hence
>
> $$
> \pi_{H_1}=\pi_{H_2}.
> $$
>
> Evaluating at the identity gives
>
> $$
> [G:H_1]=\pi_{H_1}(1)=\pi_{H_2}(1)=[G:H_2].
> $$
>
> Now let $z\in Z(G)$. The character value $\pi_H(z)$ is the number of cosets $gH$ fixed by $z$. Such a coset is fixed exactly when
>
> $$
> zgH=gH,
> $$
>
> or equivalently when $g^{-1}zg\in H$. Since $z$ is central, $g^{-1}zg=z$, and therefore
>
> $$
> \pi_H(z)=
> \begin{cases}
> [G:H],&z\in H,\\
> 0,&z\notin H.
> \end{cases}
> $$
>
> The two indices are equal and the two permutation characters agree. It follows that, for every $z\in Z(G)$,
>
> $$
> z\in H_1\quad\Longleftrightarrow\quad z\in H_2.
> $$
>
> Thus $Z(G)\cap H_1=Z(G)\cap H_2$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- The problem statement is an English translation of the user-supplied image; the screenshot contains only text and formulas, so it is not retained as an attachment.
- The source image does not specify the scalar field. The note adopts the standard complex-representation formulation; in fact, the conclusion only needs the stated equality for irreducible complex representations.
- The solution is independently derived. Both the averaging proof of complete reducibility and the required Frobenius-reciprocity isomorphism are included, so no unproved representation-theoretic black box remains.
