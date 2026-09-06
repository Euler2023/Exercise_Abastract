---
title: Lambda and Gamma Operations
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, exercise preamble and Exercises 21-24, printed pp. 217-218, PDF pp. 232-233"
source_status: partially-verified
status: not-started
---

# Lambda and Gamma Operations

## Definition

> [!info] Definition
> On a commutative ring $K$, additive lambda operations are maps $\lambda^i:K\to K$ with
> $$
> \lambda^0(x)=1,\qquad\lambda^1(x)=x,\qquad
> \lambda^n(x+y)=\sum_{i=0}^n\lambda^i(x)\lambda^{n-i}(y).
> $$
> Equivalently their generating series $\lambda_t(x)=\sum_i\lambda^i(x)t^i$ is a group homomorphism $(K,+)\to(1+tK[[t]],\cdot)$ with linear term $xt$.
>
> Define $\gamma_t(x)=\lambda_{t/(1-t)}(x)=\sum_i\gamma^i(x)t^i$. A separate **unit normalization** is $\lambda_t(1)=1+t$.

## Intuition

A generating series packages the addition identities into one multiplicative equation. The gamma operations use another formal coordinate, $s=t/(1-t)$, whose inverse is $t=s/(1+s)$. This coordinate change does not require convergence.

## Key Properties

- $\lambda_t(0)=1$ and $\lambda_t(-x)=\lambda_t(x)^{-1}$ by the group law; the same holds for $\gamma_t$.
- The gamma coefficients obey the same addition formula, since formal substitution preserves products.
- Under unit normalization, $\gamma_t(1)=1/(1-t)$ and $\gamma_t(-1)=1-t$.
- If additionally $\lambda_t(u)=1+ut$ (a line-element condition), then $\gamma_t(u-1)=1+(u-1)t$ and $\gamma_t(1-u)=\sum_{i\ge0}(1-u)^it^i$.
- Lang's printed addition axioms alone do not imply unit normalization. The counterexample below and the linked exercises isolate this omission.
- These additive or pre-lambda axioms should not be confused with the further multiplication and iteration identities required for a special lambda-ring. No such further identities are used here.

## Examples

> [!example] Examples
> On $\mathbb Z$, $\lambda_t(n)=(1+t)^n$, with negative powers interpreted by formal inversion, satisfies the addition axioms and unit normalization.
>
> On $\mathbb Q$, $\lambda_t(x)=\exp(xt)$ satisfies the addition axioms and $\lambda^1(x)=x$, but $\lambda_t(1)=e^t\ne1+t$. It gives $\gamma_t(1)=1+t+\tfrac32t^2+\cdots$, disproving IV.23(b) under the printed axioms alone.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The printed definitions, series substitution, and Exercises 21-24 were checked on [S2, Ch. IV, printed pp. 217-218, PDF pp. 232-233]. The generating-series proofs and the normalization counterexample are independently supplied in the linked exercises. The extra normalization is explicitly a repair for IV.23-IV.24, not an assertion that the source printed it. Representation-theoretic and K-theoretic interpretations are not required for these formal identities.
