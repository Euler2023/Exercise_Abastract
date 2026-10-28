---
title: "Exercise MF43: Derivatives and Nonzero Even Weight Automorphic Forms"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.2, Exercise 3.2.3, printed pp. 76–77, PDF pp. 90–91"
source_refs:
  - "S7/ch-3/sec-2/ex-3"
created: 2026-10-28
---

# Exercise MF43: Derivatives and Nonzero Even Weight Automorphic Forms

## Problem Statement

> [!question] Original Exercise 3.2.3
> Let $\Gamma$ be a congruence subgroup of $SL_2(\mathbb Z)$. Show that the derivative of the modular invariant $j$ lies in $\mathcal A_2(\Gamma)$. Show that consequently $\mathcal A_k(\Gamma)$ contains nonzero elements for all even positive integers $k$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Differentiate $j(\gamma\tau)=j(\tau)$ and use $\gamma^\prime(\tau)=(c\tau+d)^{-2}$.

> [!hint]- Hint 2
> The Laurent expansion of $j$ differentiates to a nonzero meromorphic Fourier series. Raise $j^\prime$ to the power $k/2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$, invariance of $j$ and the chain rule give
> $$
> j^\prime(\gamma\tau)\frac1{(c\tau+d)^2}=j^\prime(\tau).
> $$
> Hence $j^\prime[\gamma]_2=j^\prime$ for every such $\gamma$, in particular every $\gamma\in\Gamma$.
>
> The function $j$ is meromorphic on $\mathcal H$, so its derivative is meromorphic there. Its cusp expansion from (3.1) gives
> $$
> j^\prime(\tau)=2\pi i\left(-q^{-1}+\sum_{n\ge1}n a_nq^n\right).
> $$
> It has a finite principal part and is not zero. For every $\alpha\in SL_2(\mathbb Z)$, the transformation law just proved gives $j^\prime[\alpha]_2=j^\prime$. At the cusp corresponding to $\alpha$, the subgroup translation period is an integer $\ell$; substituting $q=q_\ell^\ell$ in this series again gives a Laurent expansion with finite principal part. Thus all three requirements in Definition 3.2.1 are satisfied, proving $j^\prime\in\mathcal A_2(\Gamma)$.
>
> If $k=2m>0$, then $(j^\prime)^m$ is nonzero and meromorphic on $\mathcal H$. The product rule for slash operators gives weight $2m$ invariance. At every cusp its transformed series is a product of $m$ meromorphic Laurent series, which still has finite principal part. Therefore
> $$
> 0\ne(j^\prime)^{k/2}\in\mathcal A_k(\Gamma).
> $$

## Related Concepts

- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 76–77 / PDF 90–91. The solution above is independently derived.
- **Proof boundary:** The claim concerns meromorphic automorphic forms. The pole at infinity shows that this construction does not generally produce holomorphic modular forms.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
