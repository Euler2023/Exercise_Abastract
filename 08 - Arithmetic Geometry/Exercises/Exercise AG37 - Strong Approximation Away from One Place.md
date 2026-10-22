---
title: 'Exercise AG37: Strong Approximation Away from One Place'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 1, printed p. 193, PDF p. 212
source_refs:
- S4/ch-III/sec-1/ex-1
created: '2026-10-23'
---

# Exercise AG37: Strong Approximation Away from One Place

## Problem Statement

> [!question] Neukirch III.1.1
> Let $S$ be a finite set of primes and let $\mathfrak p_0$ be another prime of $K$ which does not belong to $S$. Let $a_{\mathfrak p}\in K$ be given numbers, for $\mathfrak p\in S$. Then for every $\varepsilon>0$, there exists an $x\in K$ such that
> $$
> |x-a_{\mathfrak p}|_{\mathfrak p}<\varepsilon\text{ for }\mathfrak p\in S,\qquad |x|_{\mathfrak p}\le1\text{ for }\mathfrak p\notin S\cup\{\mathfrak p_0\}.
> $$

## Hints

> [!hint]- Hint 1
> 先以有限处的中国剩余定理，把允许的 $x$ 写成一个分式理想的陪集。剩下的是无穷处的非齐次格点逼近；当例外处有限时放大其允许分母，当例外处无穷时放宽该坐标。

> [!hint]- Hint 2
> 需要一个一致的格覆盖半径估计。将分式理想写为 $(\alpha)\mathfrak a_i$，其中 $\mathfrak a_i$ 来自有限个理想类代表；用单位的对数格平衡各无穷坐标的缩放。

> [!hint]- Hint 3
> 对无穷坐标乘以正数 $c_{\mathfrak p}$ 后，格的覆盖半径至多为 $C(\mathfrak N(\mathfrak a)\prod_{\mathfrak p\mid\infty}c_{\mathfrak p}^{f_{\mathfrak p}})^{1/n}$。使括号中的量趋于零，即可使每个目标向量落在某格点的任意小邻域内。

## Solution

> [!success]- Independent derivation
> 记 $n=[K:\mathbb Q]$，$V=\prod_{\mathfrak p\mid\infty}K_{\mathfrak p}$，并令 $f_{\mathfrak p}=[K_{\mathfrak p}:\mathbb R]\in\{1,2\}$。书中复处的归一绝对值是通常复模的平方；下文的欧氏坐标用通常实绝对值或复模。我们使用有限理想类群及 Dirichlet 单位格定理；这两个输入及其合并在 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.11)–(1.12), printed p. 191, PDF p. 210] 已明确陈述。以下不以强逼近定理本身作输入。
>
> **1. 证明所需的非齐次格覆盖估计。** 对非零分式理想 $\mathfrak a$ 与正数 $c_{\mathfrak p}$，设
> $$
> \Lambda=\operatorname{diag}(c_{\mathfrak p})j(\mathfrak a),\qquad M=\mathfrak N(\mathfrak a)\prod_{\mathfrak p\mid\infty}c_{\mathfrak p}^{f_{\mathfrak p}}.
> $$
> 存在仅依赖 $K$ 的常数 $C$，使 $V$ 中每一点到 $\Lambda$ 的欧氏距离不超过 $CM^{1/n}$。为证此事，选有限个分式理想类代表 $\mathfrak a_i$，写 $\mathfrak a=\alpha\mathfrak a_i$。把乘法 $c_{\mathfrak p}\alpha$ 的模记为 $d_{\mathfrak p}$；它的符号或相位是正交变换，不影响距离。又
> $$
> \prod_{\mathfrak p\mid\infty}d_{\mathfrak p}^{f_{\mathfrak p}}=M/\mathfrak N(\mathfrak a_i).
> $$
> 令 $t=n^{-1}\log(M/\mathfrak N(\mathfrak a_i))$。向量 $(\log d_{\mathfrak p}-t)_{\mathfrak p}$ 位于加权和为零的超平面。单位的对数是该超平面中的完备格，故可选单位 $u$，使所有 $\log d_{\mathfrak p}+\log|u|_{\mathfrak p,\mathrm{usual}}-t$ 落在某固定有界基本域内。由于 $u\mathfrak a_i=\mathfrak a_i$，这并不改变 $\Lambda$。于是 $\Lambda$ 是某固定格 $j(\mathfrak a_i)$ 经算子范数至多 $C_iM^{1/n}$ 的实线性变换所得。固定格的一个有界平行多面体给出有限覆盖半径；取有限个 $i$ 的最大常数，得所需估计。该论证也适用于只有一个无穷处、单位格秩为零的情形。
>
> **2. 先安排有限处条件。** 写 $S_f=\{\mathfrak p\in S:\mathfrak p\nmid\infty\}$。选整数 $m_{\mathfrak p}$ 足够大，使 $\mathfrak N(\mathfrak p)^{-m_{\mathfrak p}}<\varepsilon$。取分式理想 $\mathfrak b$，使其在 $S_f$ 的指数 $r_{\mathfrak p}\le\min(0,v_{\mathfrak p}(a_{\mathfrak p}))$，其余有限处指数为零。分式理想的中国剩余定理给出 $b\in\mathfrak b$，满足
> $$
> v_{\mathfrak p}(b-a_{\mathfrak p})\ge m_{\mathfrak p}\quad(\mathfrak p\in S_f).
> $$
> 这里先把目标视为 $\mathfrak b\mathcal O_{K,\mathfrak p}$ 中的剩余类，再对互素理想取 CRT；局部剩余类由 $\mathfrak b$ 的元素表示，因为分母在该素处可逆。令
> $$
> \mathfrak a=\prod_{\mathfrak p\in S_f}\mathfrak p^{m_{\mathfrak p}}.
> $$
> 若例外处 $\mathfrak p_0$ 有限，则所有 $x\in b+\mathfrak a\mathfrak p_0^{-N}$ 均保持上述近似，并在 $S_f\cup\{\mathfrak p_0\}$ 外有限处整；若例外处无穷，则用 $b+\mathfrak a$。
>
> **3. 安排无穷处条件。** 对 $\mathfrak p\in S\cap\{\mathfrak p\mid\infty\}$，目标坐标取 $a_{\mathfrak p}$，选择通常模误差 $\delta_{\mathfrak p}>0$ 使 $\delta_{\mathfrak p}^{f_{\mathfrak p}}<\varepsilon$；在其余受约束无穷处目标取 $0$、误差取 $1$。以 $c_{\mathfrak p}=\delta_{\mathfrak p}^{-1}$ 缩放这些坐标。
>
> 当 $\mathfrak p_0$ 有限时，所有无穷坐标都如此处理。格 $j(\mathfrak a\mathfrak p_0^{-N})$ 的缩放量为
> $$
> M_N=\mathfrak N(\mathfrak a)\mathfrak N(\mathfrak p_0)^{-N}\prod_{\mathfrak p\mid\infty}c_{\mathfrak p}^{f_{\mathfrak p}}\longrightarrow0.
> $$
> 覆盖估计保证目标向量减去 $j(b)$ 到该缩放格的距离小于 $1$，从而找到满足所有严格无穷处误差要求的陪集元素。
>
> 当 $\mathfrak p_0$ 无穷时，在该坐标令 $c_{\mathfrak p_0}=T^{-1}$，目标任取 $0$。此时 $M_T$ 含因子 $T^{-f_{\mathfrak p_0}}$，同样趋于零。覆盖估计给出 $x\in b+\mathfrak a$，其所有受约束无穷坐标均满足要求，而 $\mathfrak p_0$ 坐标允许随 $T$ 增长。
>
> 两种情形中，有限处有 $|x-a_{\mathfrak p}|_{\mathfrak p}<\varepsilon$，其余非例外有限处有 $|x|_{\mathfrak p}\le1$；无穷处也逐一满足相应条件，故结论成立。

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet Unit Lattices]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 1, printed p. 193, PDF p. 212]. 题面经原页图核；书中将其作为习题提出。上文为独立推导，格覆盖估计已在解答中证明；仅输入理想类群有限性、单位格定理、CRT 及分式理想的 Minkowski 格解释。
- **Boundary:** 例外处不可省去。例如 $K=\mathbb Q$ 时，在所有素处均要求 $|x|_p\le1$，只有有限个可能的整数；任意逼近因此失败。允许一个无约束坐标正是覆盖估计中体积趋零的来源。
