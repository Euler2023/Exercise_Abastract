---
title: "Exercise G379: Center and Central Quotient of the Heisenberg Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 8, printed p. 28, PDF p. 40"
source_refs:
  - "S10/ch-1/sec-6/ex-8"
created: 2026-11-12
---

# Exercise G379: Center and Central Quotient of the Heisenberg Group

## Problem Statement

> [!question] Original Exercise 8
> Determine the center $Z(H)$ of the Heisenberg group $H$. Show that the quotient group $H/Z(H)$ is commutative.

Hall's group in §1.2.6 is the real matrix group

$$
H=\left\{h(a,b,c)=
\begin{pmatrix}
1&a&b\\
0&1&c\\
0&0&1
\end{pmatrix}:a,b,c\in\mathbb R\right\}.
$$

[S10, Ch. 1, §1.2.6, printed pp. 11–12, PDF pp. 23–24]

## Hints

> [!hint]- Hint 1
> Compute $h(a,b,c)h(a',b',c')$ and compare it with the product in the opposite order.

> [!hint]- Hint 2
> Centrality requires $ac'=a'c$ for every $a',c'$. Then consider the map $h(a,b,c)\mapsto(a,c)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Matrix multiplication gives
> $$
> h(a,b,c)h(a',b',c')
> =h(a+a',\,b+b'+ac',\,c+c').
> $$
> The reverse product has middle coordinate $b+b'+a'c$, with the same other coordinates. Thus $h(a,b,c)$ is central exactly when
> $$
> ac'=a'c\qquad\text{for every }a',c'\in\mathbb R.
> $$
> Taking $(a',c')=(0,1)$ gives $a=0$; taking $(a',c')=(1,0)$ gives $c=0$. Conversely, these two conditions make the products equal for every $a',b',c'$. Therefore
> $$
> Z(H)=\{h(0,b,0):b\in\mathbb R\}.
> $$
>
> Define
> $$
> \pi:H\longrightarrow(\mathbb R^2,+),
> \qquad \pi(h(a,b,c))=(a,c).
> $$
> The product formula shows that $\pi$ is a homomorphism. It is surjective, since $\pi(h(x,0,y))=(x,y)$, and its kernel is precisely $Z(H)$. The First Isomorphism Theorem therefore gives
> $$
> H/Z(H)\cong(\mathbb R^2,+).
> $$
> In particular, the quotient is commutative.
>
> As a direct check, the inverse is $h(a,b,c)^{-1}=h(-a,ac-b,-c)$, so the commutator convention $[x,y]=xyx^{-1}y^{-1}$ gives
> $$
> [h(a,b,c),h(a',b',c')]=h(0,ac'-a'c,0)\in Z(H).
> $$
> Every commutator thus becomes the identity in the quotient.

## Related Concepts

- [[01 - Group Theory/Concepts/Heisenberg Group|Heisenberg Group]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

- **Source status:** The complete exercise and Hall's defining real matrix model were checked on 200 dpi original-page images. The source assigns the problem; the solution here is independently derived.
- **Imported input:** The First Isomorphism Theorem identifies the quotient. The displayed commutator calculation also proves its commutativity directly.
- **Routing:** The principal tools are the center, a quotient group, and a group homomorphism.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
