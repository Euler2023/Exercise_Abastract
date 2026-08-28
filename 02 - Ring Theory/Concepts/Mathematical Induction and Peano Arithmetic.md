---
title: Mathematical Induction and Peano Arithmetic
aliases:
  - Peano Axioms
  - Complete Induction
  - Strong Induction
topic: ring-theory
tags:
  - concept
  - ring-theory
  - induction
  - peano-arithmetic
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Appendix, §§A.1–A.2, printed pp. 514–518, PDF pp. 526–530"
source_status: verified
status: not-started
---

# Mathematical Induction and Peano Arithmetic

## Definition

The Peano description used by Artin starts with a set $\mathbb N$, a distinguished element $1$, and an injective successor map $n\mapsto n'$ for which $1$ is not a successor. Its induction axiom says that if $S\subseteq\mathbb N$ contains $1$ and contains $n'$ whenever it contains $n$, then $S=\mathbb N$.

To prove propositions $P(n)$ for every natural number, ordinary induction therefore requires:

1. a base case $P(1)$;
2. an implication $P(n)\Rightarrow P(n')$.

## Recursive Arithmetic

Addition and multiplication are defined recursively by

$$
m+1=m',
\qquad
m+n'=(m+n)',
$$

and

$$
m1=m,
\qquad
mn'=mn+m.
$$

The familiar commutative, associative, distributive, and cancellation laws are theorems proved from these recursions and successor injectivity; they are not additional Peano axioms.

## Complete Induction

The complete- or strong-induction step has the form

$$
\bigl(P(m)\text{ for every }m<n\bigr)\Longrightarrow P(n).
$$

It is equivalent to ordinary induction. Apply ordinary induction to the cumulative assertion that $P(m)$ holds for every $m\le n$.

## Intuition and Key Properties

- Induction formalizes the fact that repeated successor operations reach every natural number.
- Recursive definitions and induction are paired: the recursion constructs an operation, and induction proves its laws.
- Complete induction is useful when the reduction of $P(n)$ may involve several smaller indices rather than only $n-1$.
- The successor lemma says every $n\ne1$ has the form $m'$; it is itself a consequence of induction.

## Example

Let $S_n=1+3+\cdots+(2n+1)$. The identity $S_n=(n+1)^2$ holds initially and is preserved because

$$
(n+1)^2+(2n+3)=(n+2)^2.
$$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Partially Ordered Sets and Zorns Lemma|Partially Ordered Sets and Zorn's Lemma]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The induction schemes, Peano axioms, successor notation, and recursive definitions of addition and multiplication were checked against [S1, Appendix, §§A.1–A.2, printed pp. 514–518, PDF pp. 526–530]. The cumulative formulation of complete induction and the example are independent expansions.
