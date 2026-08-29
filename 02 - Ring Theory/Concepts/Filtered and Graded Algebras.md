---
title: Filtered and Graded Algebras
aliases:
  - Associated Graded Algebra
  - Graded Algebras
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - filtered-algebra
  - graded-algebra
created: 2026-08-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Graded Algebras and Exercises 27-28, printed p. 172, PDF p. 187"
source_status: partially-verified
status: not-started
---

# Filtered and Graded Algebras

## Definitions

Let $A$ be an algebra over a field $k$.

> [!info] Filtered algebra
> An increasing, exhaustive filtration of $A$ is a sequence of $k$-subspaces
>
> $$
> 0=A_{-1}\subseteq A_0\subseteq A_1\subseteq A_2\subseteq\cdots,
> \qquad
> \bigcup_{i\ge0}A_i=A,
> $$
>
> satisfying $A_iA_j\subseteq A_{i+j}$. The pair $(A,(A_i))$ is a **filtered algebra**.

> [!info] Graded algebra
> A graded algebra is a direct sum
>
> $$
> R=\bigoplus_{i\ge0}R_i
> $$
>
> such that $R_iR_j\subseteq R_{i+j}$.

A filtration records an upper bound on degree; a grading separates every element uniquely into homogeneous components.

## Associated Graded Algebra

Define

$$
\operatorname{gr}_i(A)=A_i/A_{i-1},
\qquad
\operatorname{gr}(A)=\bigoplus_{i\ge0}\operatorname{gr}_i(A).
$$

For $a\in A_i$ and $b\in A_j$, set

$$
(a+A_{i-1})(b+A_{j-1})=ab+A_{i+j-1}.
$$

> [!abstract] Well-defined multiplication
> This formula makes $\operatorname{gr}(A)$ a graded algebra.

**Proof.** Replacing $a$ by $a+a'$ with $a'\in A_{i-1}$ and $b$ by $b+b'$ with $b'\in A_{j-1}$ changes the product by

$$
a'b+ab'+a'b'\in A_{i+j-1}.
$$

Hence the coset is independent of representatives. Associativity and distributivity descend from $A$, and degrees add by construction.

## Filtered Maps

A linear map $L:A\to B$ is **filtration preserving** if $L(A_i)\subseteq B_i$ for every $i$. It induces maps

$$
\operatorname{gr}_i(L):\operatorname{gr}_i(A)\longrightarrow\operatorname{gr}_i(B),
\qquad
a+A_{i-1}\longmapsto L(a)+B_{i-1}.
$$

> [!abstract] Graded isomorphism criterion
> For increasing exhaustive filtrations indexed from $-1$, if every $\operatorname{gr}_i(L)$ is an isomorphism, then $L$ is a bijection and both $L$ and $L^{-1}$ preserve the filtrations. Under Lang's scalar-compatibility hypothesis this is an $(A_0,B_0)$-isomorphism. If, in addition, $L$ is a unital algebra homomorphism, then it is an algebra isomorphism.

**Proof.** For injectivity, let $L(a)=0$ and choose the least $i$ with $a\in A_i$. The class of $a$ maps to zero in $\operatorname{gr}_i(B)$, so injectivity of $\operatorname{gr}_i(L)$ gives $a\in A_{i-1}$, a contradiction unless $a=0$ after descending to $A_{-1}=0$. For surjectivity, take $b\in B_i$. Surjectivity on the $i$-th graded piece gives $a_i\in A_i$ with $b-L(a_i)\in B_{i-1}$. Induction on $i$ lifts the remaining term.

## Examples

> [!example] Polynomial degree
> For $A=k[x_1,\ldots,x_n]$, let $A_i$ be the polynomials of total degree at most $i$. Then $\operatorname{gr}(A)$ is naturally the usual graded polynomial algebra.

> [!example] Degree filtration on a graded algebra
> If $R=\bigoplus_{i\ge0}R_i$, then
>
> $$
> A_n=\bigoplus_{i=0}^nR_i
> $$
>
> defines a filtration whose associated graded algebra recovers $R$.

> [!example] Nilpotent upper-triangular algebra
> Filtering strictly upper-triangular matrices by the last nonzero superdiagonal turns multiplication into addition of filtration degree and makes nilpotence bounds visible.

## Boundaries

- Exhaustiveness is needed to recover every element of $A$ from some filtration stage.
- The implication from $\operatorname{gr}(L)$ to $L$ here uses an increasing, exhaustive filtration indexed by the nonnegative integers with $A_{-1}=B_{-1}=0$. For unbounded filtrations the conclusion need not hold, and the necessary replacement hypotheses depend on the category and on the chosen filtration.
- The associated graded algebra usually loses extension data, so $\operatorname{gr}(A)\cong\operatorname{gr}(B)$ alone does not canonically imply $A\cong B$ without a filtered map connecting them.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions and Exercise III.27-III.28 statements were checked against the rendered source page. The multiplication and isomorphism proofs in this note are independent derivations; Lang presents them as exercises.
