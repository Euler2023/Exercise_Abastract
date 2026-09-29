---
title: "Exercise ST1: Cardinality of the Finite Subsets of an Infinite Set"
topic: set-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 1, printed p. 892, PDF p. 907"
created: 2026-09-29
---

# Exercise ST1: Cardinality of the Finite Subsets of an Infinite Set

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 1
> Prove the statement made in the proof of Corollary 3.9.
>
> **Referenced statement (printed p. 890 / PDF p. 905).** Corollary 3.9 states: Let $A$ be an infinite set, and let $\Phi$ be the set of finite subsets of $A$. Then $\operatorname{card}(\Phi)=\operatorname{card}(A)$. Its proof defines $\Phi_n$ to be the set of subsets of $A$ having exactly $n$ elements and proves $\operatorname{card}(\Phi_n)\le\operatorname{card}(A)$. The step left to the reader is: “Now $\Phi$ is the disjoint union of the $\Phi_n$ for $n=1,2,\ldots$ and it is an exercise to show that $\operatorname{card}(\Phi)\le\operatorname{card}(A)$ (cf. Exercise 1).”

> [!warning] Source issue
> The quoted decomposition with $n\ge1$ omits the empty subset. Include $\Phi_0=\{\varnothing\}$ when $\Phi$ denotes all finite subsets. This changes neither the inequality nor the corollary.

## Hints

> [!hint]- Hint 1: Record the subset size
> Choose an injection $\Phi_n\to A$ for each finite $n$ and tag each subset by its size.

> [!hint]- Hint 2: Use a countable product
> Inject the union into $\mathbb N\times A$, whose cardinality is $|A|$. Singletons provide the opposite injection.

## Solution

> [!success]- Complete independent derivation
> Put $\Phi_0=\{\varnothing\}$. For $n\ge1$, a fixed well-order of $A$ orders every $n$-element subset increasingly, giving an injection $\Phi_n\to A^n$. The finite-power theorem gives $|A^n|=|A|$, so $|\Phi_n|\le|A|$. Also $|\Phi_0|=1\le|A|$. The well-order uses the same choice assumption as Lang; the cardinal-product results are proved in the linked concept.
>
> Choose injections $j_n:\Phi_n\to A$. Then
>
> $$
> \Phi\to\mathbb N\times A,\qquad F\mapsto(|F|,j_{|F|}(F))
> $$
>
> is injective. Since $A$ is infinite, $|\mathbb N\times A|=|A|$, proving the requested inequality. The map $a\mapsto\{a\}$ injects $A$ into $\Phi$, so Schroeder–Bernstein gives equality, completing the corollary too.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma]]

## Notes

Exercise checked at printed p. 892 / PDF p. 907; referenced corollary and omitted step checked at printed p. 890 / PDF p. 905. The solution is independent, using the explicitly proved cardinal results in the linked concept.
