---
title: "Exercise R225: The Associated Graded Algebra"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - filtered-algebras
  - graded-algebras
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 27, printed p. 172, PDF p. 187"
created: 2026-08-29
---

# Exercise R225: The Associated Graded Algebra

## Problem Statement

> [!question] Exercise 27
> Let $A$ be a filtered algebra. Define $R_i$, for $i\ge 0$, by
>
> $$
> R_i=A_i/A_{i-1},
> $$
>
> where, by definition, $A_{-1}=\{0\}$. Let
>
> $$
> R=\bigoplus_{i\ge0}R_i,
> \qquad
> R_i=\operatorname{gr}_i(A).
> $$
>
> Define a natural product on $R$ making $R$ into a graded algebra, denoted by $\operatorname{gr}(A)$ and called the associated graded algebra.

## Hints

> [!hint]- Hint 1
> If $a\in A_i$ and $b\in A_j$, the product $ab$ lies in $A_{i+j}$. Use its class modulo $A_{i+j-1}$ as the product of the classes of $a$ and $b$.

> [!hint]- Hint 2
> To prove independence of representatives, replace $a$ by $a+u$ with $u\in A_{i-1}$ and $b$ by $b+v$ with $v\in A_{j-1}$, and place every error term in $A_{i+j-1}$.

> [!hint]- Hint 3
> First define the product on homogeneous components $R_i\times R_j$, then extend it bilinearly to the direct sum. Associativity can be checked on homogeneous elements.

## Solution

> [!success]- Independently derived solution
> For homogeneous classes $a+A_{i-1}\in R_i$ and $b+A_{j-1}\in R_j$, define
>
> $$
> (a+A_{i-1})(b+A_{j-1})
> :=ab+A_{i+j-1}\in R_{i+j}.
> $$
>
> This expression makes sense because the filtration is multiplicative, so $ab\in A_iA_j\subseteq A_{i+j}$.
>
> We verify that it does not depend on the representatives. Let $u\in A_{i-1}$ and $v\in A_{j-1}$. Then
>
> $$
> (a+u)(b+v)-ab=av+ub+uv.
> $$
>
> If $j=0$, then $v\in A_{-1}=0$; otherwise the filtration rule gives $av\in A_iA_{j-1}\subseteq A_{i+j-1}$. Similarly, $ub\in A_{i+j-1}$, with the case $i=0$ again following from $u=0$. Finally, if $i=0$ or $j=0$, then $uv=0$; if $i,j\ge1$, then
>
> $$
> uv\in A_{i-1}A_{j-1}\subseteq A_{i+j-2}
> \subseteq A_{i+j-1}.
> $$
>
> Hence $(a+u)(b+v)$ and $ab$ determine the same class in $R_{i+j}$. The rule is therefore well defined. It is bilinear on each $R_i\times R_j$, so it extends uniquely by distributivity to a bilinear product on
>
> $$
> R=\bigoplus_{i\ge0}R_i.
> $$
>
> For homogeneous classes represented by $a\in A_i$, $b\in A_j$, and $c\in A_k$, both parenthesizations are represented in $R_{i+j+k}$ by the same element:
>
> $$
> ((a+A_{i-1})(b+A_{j-1}))(c+A_{k-1})
> =abc+A_{i+j+k-1}
> $$
>
> and
>
> $$
> (a+A_{i-1})((b+A_{j-1})(c+A_{k-1}))
> =abc+A_{i+j+k-1}.
> $$
>
> Thus the product is associative. By construction,
>
> $$
> R_iR_j\subseteq R_{i+j},
> $$
>
> so $R$ is graded. If the filtered algebra is unital and $1_A\in A_0$, then $1_A+A_{-1}\in R_0$ is the identity. The resulting graded algebra is $\operatorname{gr}(A)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Method boundary:** The construction uses only the multiplicative filtration condition $A_iA_j\subseteq A_{i+j}$; no splitting $A_i=A_{i-1}\oplus C_i$ is required.
- **Unit convention:** The source's definition of filtered algebra does not need a separate unit hypothesis. When $A$ is unital with $1_A\in A_0$, the associated graded algebra is unital as described above.
- **Source status:** The definition and requested construction were visually checked at [S2, Ch. III, Ex. 27, printed p. 172, PDF p. 187]. The verification of well-definedness and the algebra axioms is independent.
