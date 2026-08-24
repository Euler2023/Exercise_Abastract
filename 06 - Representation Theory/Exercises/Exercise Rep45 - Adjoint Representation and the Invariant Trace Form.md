---
title: "Exercise Rep45: Adjoint Representation and the Invariant Trace Form"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-representation
  - invariant-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.11, printed p. 289, PDF p. 301"
created: 2026-08-24
---

# Exercise Rep45: Adjoint Representation and the Invariant Trace Form

## Problem Statement

> [!question] Miscellaneous Exercise M.11
> The adjoint representation of a linear group $G$ is the representation by conjugation on its Lie algebra: $G\times L\to L$, defined by $(P,A)\mapsto PAP^{-1}$. The form $(A,A')=\operatorname{trace}(AA')$ on $L$ is called the Killing form. For the following groups, verify that if $P$ is in $G$ and $A$ is in $L$, then $PAP^{-1}$ is in $L$. Prove that the Killing form is symmetric and bilinear and that the operation is compatible with the form, i.e., that $(A,A)=(PAP^{-1},PA'P^{-1})$.
>
> (a) $U_n$; (b) $O_{3,1}$; (c) $SO_n(\mathbb C)$; (d) $SP_{2n}$.
>
> [!warning] Source issues
> In standard Lie-theory terminology, $\operatorname{tr}(AA')$ is the defining-representation trace form; the Killing form is $\operatorname{tr}(\operatorname{ad}_A\operatorname{ad}_{A'})$. Also, the final displayed compatibility formula must have $(A,A')$ on the left. Both printed usages are preserved above, and the corrected formula is proved below.

## Hints

> [!hint]- Hint 1
> Conjugate the one-parameter subgroup $e^{tA}$ by $P$ and differentiate at $t=0$.

> [!hint]- Hint 2
> Use cyclicity of trace.

## Solution

> [!success]- Solution
> If $A\in L=\operatorname{Lie}(G)$, then $e^{tA}\in G$. For $P\in G$,
>
> $$
> Pe^{tA}P^{-1}=e^{tPAP^{-1}}\in G,
> $$
>
> so $PAP^{-1}\in L$. This applies to all four listed groups and is equivalent to direct preservation of their skew-Hermitian, Lorentz, complex skew-symmetric, or symplectic infinitesimal equations.
>
> The trace form is bilinear, and
>
> $$
> \operatorname{tr}(AA')=\operatorname{tr}(A'A)
> $$
>
> makes it symmetric. Finally,
>
> $$
> \begin{aligned}
> \bigl(PAP^{-1},PA'P^{-1}\bigr)
> &=\operatorname{tr}(PAA'P^{-1})\\
> &=\operatorname{tr}(AA')\\
> &=(A,A').
> \end{aligned}
> $$
>
> Hence the adjoint representation preserves the trace form in every case.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Terminology boundary:** Artin's trace form is often proportional to the standard Killing form on a simple classical Lie algebra, but the proportionality and exceptional low-rank cases must be checked separately.
- **Source status:** M.11, including both printed issues, was visually checked at [S1, Ch. 9, Misc. Ex. M.11, printed p. 289, PDF p. 301]. The invariant-form proof is independent.
