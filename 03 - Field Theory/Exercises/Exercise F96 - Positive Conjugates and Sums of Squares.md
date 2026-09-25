---
title: "Exercise F96: Positive Conjugates and Sums of Squares"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - ordered-fields
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercise 1, printed p. 461, PDF p. 476"
created: 2026-09-25
---

# Exercise F96: Positive Conjugates and Sums of Squares

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 1
> Let $\alpha$ be algebraic over $\mathbb Q$ and assume that $\mathbb Q(\alpha)$ is a real field. Prove that $\alpha$ is a sum of squares in $\mathbb Q(\alpha)$ if and only if for every embedding $\sigma$ of $\mathbb Q(\alpha)$ in $\mathbb R$ we have $\sigma\alpha>0$.

> [!warning] Source issue
> The printed assertion omits $\alpha\ne0$. For $\alpha=0$, the left side is true and the strict inequality on the right is false. The proof below treats the intended nonzero case; for arbitrary $\alpha$, replace $\sigma(\alpha)>0$ by $\sigma(\alpha)\ge0$.

## Hints

> [!hint]- Hint 1
> In an ordered field, every nonzero sum of squares is positive. Apply this after each real embedding.

> [!hint]- Hint 2
> If $\alpha$ is not a sum of squares, use Lang's Chapter XI, Corollary 2.3 to order $\mathbb Q(\alpha)$ with $\alpha<0$.

> [!hint]- Hint 3
> Every ordering on a number field is Archimedean: an algebraic element is bounded in absolute value by a rational number using its minimal polynomial. An Archimedean ordered field embeds in $\mathbb R$.

## Solution

> [!success]- Independently derived solution
> ### Corrected assertion
> Put $K=\mathbb Q(\alpha)$. Suppose first that $\alpha\ne0$ is a sum of squares, say $\alpha=\sum_{i=1}^m x_i^2$ with $x_i\in K$. Under any embedding $\sigma:K\hookrightarrow\mathbb R$,
> $$
> \sigma(\alpha)=\sum_{i=1}^m \sigma(x_i)^2>0.
> $$
> The inequality is strict because $\alpha\ne0$, so at least one $x_i$ is nonzero and its image under the injective map $\sigma$ is nonzero.
>
> Conversely, suppose $\alpha$ is not a sum of squares in the real field $K$. Lang's Corollary 2.3 gives an ordering of $K$ in which $\alpha<0$. Since $K/\mathbb Q$ is finite, this ordering is Archimedean. Indeed, for $x\in K$ choose a monic polynomial
> $$
> x^d+c_{d-1}x^{d-1}+\cdots+c_0=0,\qquad c_i\in\mathbb Q.
> $$
> The usual root-bound argument, which uses only ordered-field inequalities, gives $|x|<1+\max_i|c_i|$ in this ordering. Thus every element of $K$ is bounded by a rational number. The Dedekind-cut embedding of an Archimedean ordered field into $\mathbb R$ produces an embedding $\sigma:K\hookrightarrow\mathbb R$ with $\sigma(\alpha)<0$. Consequently, if every real embedding makes $\alpha$ positive, $\alpha$ must be a sum of squares.
>
> If $\alpha=0$, it is a sum of squares and every $\sigma(\alpha)=0$. Combining this case with the nonzero result proves the version with $\sigma(\alpha)\ge0$ for all $\alpha\in K$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete exercise and the strict sign were visually checked at [S2, Ch. XI, Ex. 1, printed p. 461, PDF p. 476]. Lang's Corollary 2.3 is proved at [S2, Ch. XI, §2, printed p. 452, PDF p. 467]; the following example states the number-field criterion at [S2, Ch. XI, §2, printed p. 457, PDF p. 472]. The argument here is an independent derivation using that corollary and the standard Archimedean ordered-field embedding theorem.
- **Terminology:** “Real field” means formally real: $-1$ is not a sum of squares. It does not mean that all embeddings of $K$ are real; only the real embeddings enter the condition.
- **Source issue:** The same strict-sign boundary occurs in the textbook's example on printed p. 457. The zero-element correction is necessary in both places.
