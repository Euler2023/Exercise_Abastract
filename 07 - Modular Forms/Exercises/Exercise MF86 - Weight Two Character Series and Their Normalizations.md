---
title: "Exercise MF86: Weight Two Character Series and Their Normalizations"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.6, Exercise 4.6.3, printed p. 133, PDF p. 147"
source_refs:
  - "S7/ch-4/sec-6/ex-3"
created: 2026-10-28
---

# Exercise MF86: Weight Two Character Series and Their Normalizations

## Problem Statement

> [!question] Original Exercise 4.6.3
> Prove equations (4.25).
>
> The source displays, for a positive integer $t$,
> $$
> G_{2,1_1,1_1}(\tau)-tG_{2,1_1,1_1}(t\tau)=\frac{C_2}{N^2}\bigl(E_{2,1_1,1_1}(\tau)-tE_{2,1_1,1_1}(t\tau)\bigr)=\frac1{N^2}G_{2,t}(\tau).
> $$
> Here $G_{2,t}(\tau)=G_2(\tau)-tG_2(t\tau)$ and $C_2=(-2\pi i)^2$.

> [!warning] Source issue and corrected scope
> Equation (4.25) uses the trivial characters of modulus one but retains the symbol $N^{-2}$. The formula is valid with their intrinsic level $N=uv=1$; it is false if this $N$ is treated as a free ambient level. The displayed formula is retained verbatim, and the proof makes that necessary interpretation explicit.

## Hints

> [!hint]- Hint 1
> The displayed characters both have modulus $1$; their intrinsic level is $uv=1$.

> [!hint]- Hint 2
> Compare the constant and positive coefficients of $G_2$ and $C_2E_{2,1_1,1_1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Both characters in the displayed left-hand notation are $1_1$, the trivial character of modulus one. Thus in their defining construction $u=v=1$ and $N=uv=1$. The triple sum defining $G_{2,1_1,1_1}$ then has one term and is precisely the level-one holomorphic Fourier series $G_2$ from (4.23). The normalized character series is
> $$
> E_{2,1_1,1_1}=\zeta(-1)+2\sum_{n\ge1}\sigma_1(n)q^n=-\frac1{12}+2\sum_{n\ge1}\sigma_1(n)q^n.
> $$
> Since $C_2=-4\pi^2$ and $2\zeta(2)=\pi^2/3$, their constant terms agree: $C_2(-1/12)=\pi^2/3$. Their positive coefficients also agree, namely $2C_2\sigma_1(n)$. Hence $G_{2,1_1,1_1}=G_2=C_2E_{2,1_1,1_1}$ as convergent Fourier series. Subtracting $t$ times the equality at $t\tau$ proves
> $$
> G_{2,1_1,1_1}(\tau)-tG_{2,1_1,1_1}(t\tau)=C_2(E_{2,1_1,1_1}(\tau)-tE_{2,1_1,1_1}(t\tau))=G_{2,t}(\tau).
> $$
> This is exactly (4.25) when its $N$ is interpreted as the intrinsic product $uv=1$. If $N$ instead means an arbitrary ambient level, the printed factors $N^{-2}$ do not belong in this identity: the two fixed modulus-one series are independent of that ambient level. For example at an ambient level $N=2$ and $t=2$, $G_{2,2}$ has nonzero constant $-\pi^2/3$, whereas multiplying it by $N^{-2}$ gives $-\pi^2/12$. Thus that reading is false.
>
> Although $G_2$ and $E_{2,1_1,1_1}$ individually are quasimodular, the difference $G_{2,t}$ is a holomorphic weight-two form on $\Gamma_0(t)$ by the cancellation of their nonholomorphic completions, as in Section 1.2. For $t=1$ all three differences vanish; for $t>1$ their equality is a nonzero identity of modular forms.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.6.3, printed p. 133 / PDF p. 147]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Equation (4.25) and the definitions immediately preceding it are on printed p.132/PDF p.146. The distinction between the normalization $E_{2,1_1,1_1}=-1/12+2\sum\sigma_1(n)q^n$ and the rescaled $E_2=-1/24+\sum\sigma_1(n)q^n$ in Exercise 5.2.6 is essential.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
