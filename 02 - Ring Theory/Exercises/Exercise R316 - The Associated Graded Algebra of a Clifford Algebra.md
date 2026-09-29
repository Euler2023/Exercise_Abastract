---
title: "Exercise R316: The Associated Graded Algebra of a Clifford Algebra"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 16, printed p. 757, PDF p. 772"
created: 2026-09-29
---

# Exercise R316: The Associated Graded Algebra of a Clifford Algebra

## Problem Statement

> [!question] Lang XIX.16
> Let $C_g(E)$ be the Clifford algebra as defined in section 4. Define $F_i(C_g)=(k+E)^i$, viewing $E$ as embedded in $C_g$. Define the similar object $F_i(\bigwedge E)$ in the alternating algebra. Then $F_{i+1}\supset F_i$ in both cases, and we define the $i$-th graded module $\operatorname{gr}_i=F_i/F_{i-1}$. Show that there is a natural (functorial) isomorphism
>
> $$
> \operatorname{gr}_i(C_g(E))\xrightarrow{\ \sim\ }
> \operatorname{gr}_i(\bigwedge E).
> $$

## Hints

> [!hint]- Hint 1
> The defining Clifford relation $v^2=g(v,v)$ has lower-degree right side. Thus degree-one symbols square to zero in the associated graded algebra.

> [!hint]- Hint 2
> Prove that ordered products of distinct basis vectors are independent using the operators $\epsilon_v+\iota_{g(v,-)}$ on $\bigwedge E$.

## Solution

> [!success]- Independent derivation
> The hypotheses inherited from section 4 are: $k$ is a field, $E$ is finite-dimensional, and $g$ is a symmetric bilinear form. Lang's convention is $v^2=g(v,v)1$. Set $F_{-1}=0$ and $F_0=k1$; $F_i$ is the span of products of at most $i$ vectors. We prove the assertion in every characteristic, including degenerate forms.
>
> Let $e_1,\ldots,e_n$ be any basis. The relations
>
> $$
> e_i^2=g(e_i,e_i)1,\qquad
> e_je_i=-e_ie_j+2g(e_i,e_j)1
> $$
>
> show that the increasing monomials $e_I=e_{i_1}\cdots e_{i_r}$, together with $e_\varnothing=1$, span $C_g(E)$. Indeed, exchanging an adjacent out-of-order pair reduces its inversion count, while the extra scalar term has two fewer factors; repeated factors are removed by the square relation. Induction first on word length and then on inversions proves spanning, also with the bound $r\le i$ for $F_i$.
>
> For independence, work on $\bigwedge E$. Define $\epsilon_v(u)=v\wedge u$ and
>
> $$
> \iota_v(w_1\wedge\cdots\wedge w_r)
> =\sum_{j=1}^r(-1)^{j-1}g(v,w_j)
> w_1\wedge\cdots\wedge\widehat w_j\wedge\cdots\wedge w_r.
> $$
>
> The deletion formula is alternating and therefore well-defined. Deleting two factors in the two possible orders gives cancelling terms, so $\iota_v^2=0$. The term deleting the newly inserted $v$ gives
>
> $$
> \iota_v\epsilon_v+\epsilon_v\iota_v=g(v,v)I.
> $$
>
> Together with $\epsilon_v^2=0$, these identities show that $c(v)=\epsilon_v+\iota_v$ satisfies $c(v)^2=g(v,v)I$. The tensor-algebra quotient therefore supplies a representation $C_g(E)\to\operatorname{End}_k(\bigwedge E)$.
>
> For an increasing $I$ of size $r$, the highest exterior-degree component of
>
> $$
> c(e_{i_1})\cdots c(e_{i_r})1
> $$
>
> is exactly $e_{i_1}\wedge\cdots\wedge e_{i_r}$; all other terms have smaller degree. In a linear relation among the Clifford monomials, apply the corresponding operators to $1$ and compare the largest occurring exterior degree. Independence of the exterior basis forces all coefficients of that degree to vanish. Descending induction forces every coefficient to vanish. Thus the monomials $e_I$ are a basis, and those with $\lvert I\rvert\le i$ form a basis of $F_i$.
>
> In $\operatorname{gr}C_g(E)$, the degree-one symbol of $v$ has square zero because $v^2\in F_0$. The exterior universal property consequently gives a graded algebra map
>
> $$
> \theta:\bigwedge E\longrightarrow\operatorname{gr}C_g(E),
> \qquad
> v_1\wedge\cdots\wedge v_i\longmapsto
> v_1\cdots v_i+F_{i-1}.
> $$
>
> It maps the degree-$i$ exterior basis to the degree-$i$ symbols of the Clifford basis. Hence it is an isomorphism in every degree. On the exterior side, $F_i(\bigwedge E)=\bigoplus_{r\le i}\bigwedge^rE$, so its associated graded degree $i$ is canonically $\bigwedge^iE$. The requested map is $\theta_i^{-1}$ under this identification.
>
> Finally, a linear map $h:E\to E'$ preserving the forms, meaning $g'(h(v),h(w))=g(v,w)$, induces a filtered Clifford-algebra map and the usual exterior-algebra map. Both paths send $v_1\wedge\cdots\wedge v_i$ to the symbol of $h(v_1)\cdots h(v_i)$. This proves naturality; the isomorphism itself does not depend on the basis used to prove it.

## Related Concepts

- [[02 - Ring Theory/Concepts/Clifford Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras]]

## Notes

The exercise was checked at [S2, Ch. XIX, Exercise 16, printed p. 757, PDF p. 772]. The field, symmetric-form, and sign conventions were checked at section 4, printed pp. 749-750 / PDF pp. 764-765. The ordered-basis and associated-graded arguments here are independent, so they do not import Lang's characteristic-not-2 proof as though it covered characteristic 2. Naturality is for maps preserving the quadratic relation, in particular for the form-preserving maps explicitly described above.
